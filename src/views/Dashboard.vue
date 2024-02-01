<template>
    <div class="dashboard-wrapper">
        <h1>Osoby które kupiły bilety na konferencję w Rzemieniu</h1>
        <div class="bought-tickets-wrapper">
            <p v-if="loading">Trwa ładowanie danych</p>
            <p v-if="!loading && enrollments.length === 0">Brak zgłoszeń</p>
            <table v-if="!loading && enrollments.length >0" >
                <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>E-mail</th>
                        <th>Numer telefonu</th>
                        <th>Wiadomość</th>
                        <th>Bilet/Pakiet</th>
                        <th>Opłacone</th>
                        <th>Data Opłacenia</th>
                        <th>Usuń zgłoszenie</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="enrollment in enrollments" :key="enrollment.id">
                        <td>{{ enrollment.firstName }}</td>
                        <td>{{ enrollment.lastName }}</td>
                        <td>{{ enrollment.email }}</td>
                        <td>{{ enrollment.phone }}</td>
                        <td>{{ enrollment.message ? enrollment.message : '-' }}</td>
                        <td>{{ enrollment.packet ? 'Pakiet' : 'Bilet' }}</td>
                        <td><p v-if="enrollment.paid">Tak</p><button @click="markAsPaid(enrollment.id)" v-else>Zaksięguj wpłatę</button></td>
                        <td>{{ enrollment.paidAt ? new Date(enrollment.paidAt).toLocaleString(undefined, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }) : '-' }}</td>
                        <td><button @click="deleteEnrollment(enrollment.id)">Usuń</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const loading = ref(true);

        const router = useRouter();

        const enrollments = ref([]);

        const getAllEnrollments = async () => {
            loading.value = true;
            await axios.get('https://api.zacznijodwody.pl/enrollments', { withCredentials: true }).then((res) => {
                loading.value = false;
                enrollments.value = res.data;
            }).catch((err) => {
                console.log(err);
                if (err.response.status === 403) {
                    router.push({ name: 'Login' });
                }
            });
        };

        const markAsPaid = async (id) => {
            loading.value = true;
            await axios.get(`https://api.zacznijodwody.pl/enrollments/mark-as-paid/${id}`, { withCredentials: true }).then(() => {
                getAllEnrollments();
            }).catch((err) => {
                console.log(err);
            });
        };

        const deleteEnrollment = async (id) => {
            loading.value = true;
            await axios.get(`https://api.zacznijodwody.pl/enrollments/delete/${id}`, { withCredentials: true }).then(() => {
                getAllEnrollments();
            }).catch((err) => {
                console.log(err);
            });
        };

        onMounted(async () => {
            await getAllEnrollments();
        });

        return {
            loading,
            enrollments,
            markAsPaid,
            deleteEnrollment,
        };
    },
};
</script>

<style lang="scss" scoped>
.dashboard-wrapper{
    padding-top: 5rem;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;
    font-family: 'Poppins', sans-serif;
    color: #0B3954;
    h1{
        font-size: 2rem;
    }
    .bought-tickets-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: calc(100% - 9rem);
        padding: 0 5rem;
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border-radius: 8px;

            th {
                background-color: #0B3954; /* Kolor tła dla nagłówków */
                color: white; /* Kolor tekstu dla nagłówków */
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }

            td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: center;
            }

            tr:hover td {
                background-color: #ddd; /* Kolor podświetlonego wiersza */
            }

            button {
                background-color: #0B3954;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 5px 10px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 14px;
                margin: 2px 0;
                cursor: pointer;
            }
        }
    }
}
</style>
