const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

let instance = null;
//Conexão com banco de dados SQL


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: "root",
    password: process.env.PASSWORD,
    database: "tcc_blaue",
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('db ' + connection.state);
})


class DbService {
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM parentescos ORDER BY id DESC LIMIT 1";

            connection.query(query, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })

            });

            // console.log(response)
            return response

        } catch (error){
            console.log(error);
        }
    }

    async getUserId() {
        try {
            const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM clientes ORDER BY id DESC LIMIT 1";

            connection.query(query, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })

            });

            // console.log(response)
            return response

        } catch (error){
            console.log(error);
        }
    }


    async insertNewName(parente1, parente2, parente3, parente4, parente5, parente6, nome1, nome2, nome3, nome4, nome5, nome6){
        try{
            const insertId = await new Promise((resolve, reject) => {
                const query = "INSERT INTO parentescos (parente1, parente2, parente3, parente4, parente5, parente6, nome1, nome2, nome3, nome4, nome5, nome6) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
                connection.query(query, [parente1, parente2, parente3, parente4, parente5, parente6, nome1, nome2, nome3, nome4, nome5, nome6], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
    
                });
    
                console.log(insertId)
                // return response;
        } catch (error) {
            console.log(error);
        }
    }

    async checkLogin(email, senha) {
        try {
            const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM clientes WHERE email = ? AND senha = ?; ";

            connection.query(query,[email, senha], (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })

            });
            return response
                  

        } catch (error){
            console.log(error);
        }
    }

    async insertGame(timer, modo_jogo, pontuacao, id_jogador){
        try{
            const insertGame = await new Promise((resolve, reject) => {
                const query = "INSERT INTO games (timer, modo_jogo, pontuacao, id_jogador) VALUES (?, ?, ?, ?)";
    
                connection.query(query, [timer, modo_jogo, pontuacao, id_jogador], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertGame);
                })
    
                });
    
                console.log(insertGame)
                // return response;
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = DbService

