/**
 * Created by total on 5/17/2018.
 */

import { url } from "../config/variables";
export default class User {

    //Method for getting users from remote server
    async getUsers() {
        let response = await fetch(url);
        let users = await response.json();
        return users;
    }
}