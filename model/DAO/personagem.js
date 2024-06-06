const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const selectAllPersonas = async function() {
    let sql = 'SELECT * FROM tbl_personagem';
    let rsPersona = await prisma.$queryRawUnsafe(sql);

    if (rsPersona.length > 0) {
        return rsPersona;
    } else {
        return false;
    }
};

const { PrismaClient } = require('@prisma/client');

const PrismaClient = new PrismaClient();

const deletePersonagemById = async function(id) {
    try {
        let result = await prisma.tbl_personagem.delete({
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
    selectAllPersonas,
    deletePersonagemById
};
