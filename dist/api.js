"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongo_helper_1 = __importDefault(require("./helpers/mongo.helper"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const env_dev_1 = __importDefault(require("./environmets/env.dev"));
const app = (0, express_1.default)();
// Principal
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Mostrar Entorno de Ejecucion
    console.log('Mostramos entorno de ejecucion: ', process.env.NODE_ENV);
    // Intentamos establecer conexiion con la base de datos
    const mongodb = mongo_helper_1.default.getInstance(env_dev_1.default);
    yield mongodb.connect();
    // Middlewares
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)());
    app.use('/v1/products', product_route_1.default);
    app.listen(3000, () => {
        console.log('Servidor Express funcionando correctamente !!!');
    });
}))();
