import axios from "axios";
import CryptoJS from 'crypto-js';

 class ApiClient {

    static BASE_URL = "http://localhost:9090/api";
    static ENCRYPTION_KEY = "nizar-secrete-key";

    //encrypt token using CryptoJS

    static encrypt(token) {
        return CryptoJS.AES.encrypt(token, this.ENCRYPTION_KEY.toString());
    }

    //decrypt token using CryptoJS
    static decrypt(token) {
        const bytes = CryptoJS.AES.decrypt(token, this.ENCRYPTION_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    //save token
    static saveToken(token) {
        const savedToken = this.encrypt(token);
        localStorage.setItem("token", savedToken);
    }

    //retrieve token
    static getToken() {
        const currentToken = localStorage.getItem("token");
        if (!currentToken) return null;
        return this.decrypt(currentToken)
    }

    //save role
    static saveRole(role) {
        const userRole = this.encrypt(role);
        localStorage.setItem("role", userRole);
    }


    //get role
    static getRole() {
        const userRole = localStorage.getItem("role");
        if (!userRole) return null;
        return this.decrypt(userRole)
    }

    static clearAuth() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
    }

    static getHeader() {
        const token = this.getToken();
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }

    /** AUTH AND USERS API METHODS */

    // AUTH
    static async registerUser(registrationData) {
        const resp = await axios.post(`${this.BASE_URL}/auth/register`, registrationData);
        return resp.data;
    }


    static async loginUser(loginData) {
        const resp = await axios.post(`${this.BASE_URL}/auth/login`, loginData);
        return resp.data;
    }

    // USERS
    static async myProfile() {
        const resp = await axios.get(`${this.BASE_URL}/users/account`, {
            headers: this.getHeader()
        })
        return resp.data;
    }

    static async myBookings() {
        const resp = await axios.get(`${this.BASE_URL}/users/bookings`, {
            headers: this.getHeader()
        })
        return resp.data;
    }

    static async deleteAccount() {
        const resp = await axios.delete(`${this.BASE_URL}/users/delete`, {
            headers: this.getHeader()
        })
        return resp.data;
    }

    // ROOMS

    static async addRoom(formData) {
        const resp = await axios.post(`${this.BASE_URL}/rooms/add`, formData, {
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return resp.data;
    }

    //to get room types
    static async getRoomTypes() {
        const resp = await axios.get(`${this.BASE_URL}/rooms/types`);
        return resp.data;
    }

    //to get all rooms
    static async getAllRooms() {
        const resp = await axios.get(`${this.BASE_URL}/rooms/all`);
        return resp.data;
    }

    //To get room details
    static async getRoomById(roomId) {
        const resp = await axios.get(`${this.BASE_URL}/rooms/${roomId}`);
        return resp.data;
    }

    static async deleteRoom(roomId) {
        const resp = await axios.delete(`${this.BASE_URL}/rooms/delete/${roomId}`, {
            headers: this.getHeader()
        });
        return resp.data;
    }

    static async updateRoom(formData) {
        const resp = await axios.put(`${this.BASE_URL}/rooms/update`, formData, {
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return resp.data;
    }

    static async getAvailableRooms(checkInDate, checkOutDate, roomType) {

        console.log("checkInDate from api: " + checkInDate)
        console.log("checkOutDate from api: " + checkOutDate)

        const resp = await axios.get(`${this.BASE_URL}/rooms/available?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomType=${roomType}`);
        return resp.data;

    }


    //BOOKINGS
    static async getBookingByReference(bookingCode) {
        const resp = await axios.get(`${this.BASE_URL}/bookings/${bookingCode}`);
        return resp.data;
    }

    static async bookRoom(booking) {
        const resp = await axios.post(`${this.BASE_URL}/bookings`, booking, {
            headers: this.getHeader()
        });
        return resp.data;
    }

    static async getAllBookings() {
        const resp = await axios.get(`${this.BASE_URL}/bookings/all`, {
            headers: this.getHeader()
        });
        return resp.data;
    }

    static async updateBooking(booking) {
        const resp = await axios.put(`${this.BASE_URL}/bookings/update`, booking, {
            headers: this.getHeader()
        });
        return resp.data;
    }

    //PAYMMENT
    //funtion to create payment intent
    static async proceedForPayment(body) {
        const resp = await axios.post(`${this.BASE_URL}/payments/pay`, body, {
            headers: this.getHeader()
        });
        return resp.data; //return the strip transaction id for this transaction
    }

    //TO UPDATE PAYMENT WHEN IT HAS BEEN COMPLETED
    static async updateBookingPaymeent(body) {
        const resp = await axios.put(`${this.BASE_URL}/payments/update`, body, {
            headers: this.getHeader()
        });
        return resp.data;
    }


    //AUTHENTICATION CHECKER
    static logout(){
        this.clearAuth();
    }

    static isAuthenticated(){
        const token = this.getToken();
        return !!token;
    }

    static isAdmin(){
        const role = this.getRole();
        return role === "ADMIN";
    }

    static isCustomer(){
        const role = this.getRole();
        return role === "CUSTOMER";
    }

}


export default ApiClient;
