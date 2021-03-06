System.register(["@angular/core", "@angular/material", "./authorization.service", "./api.service", "./header/header.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, material_1, authorization_service_1, api_service_1, header_component_1, CommonModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (authorization_service_1_1) {
                authorization_service_1 = authorization_service_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }
        ],
        execute: function () {
            CommonModule = (function () {
                function CommonModule() {
                }
                return CommonModule;
            }());
            CommonModule = __decorate([
                core_1.NgModule({
                    imports: [material_1.MdToolbarModule],
                    declarations: [header_component_1.HeaderComponent],
                    exports: [header_component_1.HeaderComponent],
                    providers: [api_service_1.ApiService, authorization_service_1.AuthorizationService]
                })
            ], CommonModule);
            exports_1("CommonModule", CommonModule);
        }
    };
});
//# sourceMappingURL=common.module.js.map