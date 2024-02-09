const fs = requiere('fs').promises;

class Model {
    constructor (folder) {
        this.folder = folder;
    }

    static async getFiles (folder) {
        try {
            const filesArr = await fs.readdir

        } catch (err) {
            console.log ('Ошибка')
        }
    }
}