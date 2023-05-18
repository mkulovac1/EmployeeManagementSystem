import axios from "axios";

const api = "http://localhost:8080/api/v1/employees"

class EmployeeService  {
    getEmployees() {
        return axios.get(api);
    }
}

export default new EmployeeService(); // objekat eksportamo, a ne klasu