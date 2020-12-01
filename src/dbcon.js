// Estabelece conexao com a base de dados SQLite
export const abreConexao = () => {
    let db = new sqlite3.Database('./calendario.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Conectado.");
        return db;
    });
}

// Fecha conexao com a base de dados SQLite
export const fechaConexao = (db) => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Conexao encerrada.");
    });
}