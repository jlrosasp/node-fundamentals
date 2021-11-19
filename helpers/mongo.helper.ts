import { MongoClient, MongoClientOptions } from 'mongodb';

export default class MongoDBHelper {

    public db: any;
    public infoConnection: any = {};

    private static _instance: MongoDBHelper;
    private cnn: any;
    private dbUri: string;
    private env: any;

    constructor(env: any) {
        // Inicializar propiedades al crear instancia
        this.env = env;
        this.dbUri = `mongodb://${this.env.MONGODB.USERNAME}:${this.env.MONGODB.USERPWD}@${this.env.MONGODB.HOST}:${this.env.MONGODB.PORT}/${this.env.MONGODB.DATABASE}`;
    }

    public static getInstance(env: any) {
        return this._instance || (this._instance = new this(env));
    }

    public async connect() {
        const result: any = await MongoClient.connect(this.dbUri, {})
            .then((cnn: any) => {
                return {
                    status: 'success', cnn, msg: `Conexion al Servidor de MongoDB realizada de forma correcta !!!`
                }
            })
            .catch((err: any) => {
                return {
                    status: 'error', err, msg: `Ocurrio un error no contemplado al intentar conectarse con el Servidor de MongoDB (${this.env.MONGODB.HOST})`
                }
            });

        this.infoConnection = result;
        if (this.infoConnection.status == 'success') {
            this.cnn = this.infoConnection.cnn;
            this.db = this.cnn.db(this.env.MONGODB.DATABASE)
        } else {
            this.cnn = null;
            this.db = null;
            console.log(this.infoConnection.err)
        }
        console.log(this.infoConnection.msg);
    }

    public setDataBase(dataBase: string) {
        if (this.cnn) {
            this.db = this.cnn.db(dataBase);
        }
    }

    public disconnect() {   
        if (this.cnn) {
            this.cnn.close();
        }
    }

}