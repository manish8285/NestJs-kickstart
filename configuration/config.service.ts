import { Injectable } from "@nestjs/common";
import { ContextIdFactory } from "@nestjs/core";
import { hostname } from "os";
import { CustomLogger } from "utils/logger/custom-logger.service";
import config  from "./properties";


@Injectable()
export class ConfigService {

    static PROPERTIES;
    constructor(private readonly logger:CustomLogger){
        if(process.env.NODE_ENV == "development" || process.env.NODE_ENV == ""){
            ConfigService.PROPERTIES = config.development;
        }

        if(process.env.NODE_ENV == "production"){
            ConfigService.PROPERTIES = config.production;
        }
    }

}