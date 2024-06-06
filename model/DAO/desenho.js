//listar desenho

const {PrismaClient} = require('@prisma/client')

const prima = new PrismaClient();

const selectAllDesenho = async function(){

    let sql = 'select * from tbl_Desenho'

    let rsdesenho= await prima.$queryRawUnsafe(sql)

    if(rsdesenho.length > 0)
          return
    else(error)
    return false

}

//excluir desenho

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const deleteDesenhoById = async function(id) {
    try {
        let result = await prisma.tbl_desenho.delete({
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
    selectAllDesenho,
    deleteDesenhoById
}