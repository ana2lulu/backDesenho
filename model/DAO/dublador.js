const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const selectAllDubladores = async function() {
    let sql = 'SELECT * FROM tbl_dublador';
    let rsDublador = await prisma.$queryRawUnsafe(sql);

    if (rsDublador.length > 0) {
        return rsDublador;
    } else {
        return false;
    }
};

const { PrismaClient } = require('@prisma/client');

const PrismaClient = new PrismaClient();

const deleteDubladorById = async function(id) {
    try {
        let result = await prisma.tbl_dublador.delete({
            where: {
                id: id
            }
        });
        return result ? true : false;
    } catch (error) {
        console.error(error);
        return false;
    }
};


module.exports = {
    selectAllDubladores,
    deleteDubladorById
};
