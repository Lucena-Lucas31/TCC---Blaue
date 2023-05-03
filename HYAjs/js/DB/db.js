async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost:3306/tcc_blaue");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function insertGame(game){
    const conn = await connect();
    const sql = 'INSERT INTO tb_game(Start_Time,Fk_Id,Game_Time,Game_Errors) VALUES (?,?,?,?);';
    const values = [game.Start_Time, game.Fk_Id, game.Game_Time, game.Game_Errors];
    await conn.query(sql, values);
}



module.exports = {insertGame}