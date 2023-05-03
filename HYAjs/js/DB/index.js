(async () => {
    const db = require("./db");
    console.log('Começou!');
    console.log('INSERT INTO TB_Game');
    await db.insertGame({Start_Time: '2023-05-03 08:28:10', Fk_Id: null, Game_Time: 12, Game_Errors: "13"});

})();