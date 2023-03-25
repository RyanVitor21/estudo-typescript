import {body} from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
        .isString()
        .withMessage("O titulo é Obrigatorio.")
        .isLength({min: 5})
        .withMessage("O titulo deve ter no minimo 5 caracteres"),
        body("rating")
        .isNumeric()
        .withMessage("A nota precisa ser um numero")
        .custom((value: number) => {
            if (value < 0 || value > 10) {
                throw new Error("a nota precisa ser entre 0 e 10");
                
            }
            return true
        }),
        body("description").isString().withMessage("a descrição é obrigatoria"),
        body("diretor").isString().withMessage("o nome do diretor é obrigatorio"),
        body("poster").isURL().withMessage("a imagem precisa ser uma URL")
    ]   
}