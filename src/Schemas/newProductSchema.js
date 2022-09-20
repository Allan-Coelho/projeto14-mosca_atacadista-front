import joi from "joi";
const CATEGORIES = Object.freeze([
  'Eletronicos',
  'Audio-e-video',
  'Moda',
  'Mercearia',
  'Livros',
  'Instrumentos-Musicais',
  'Promocao',
  'Saude',
  'Decoracao',
  'Brinquedos',
]);

const newProductSchema = joi.object({
  name: joi.string().min(1).required(),
  description: joi.string().min(256).max(1024),
  price: joi.number().min(0.01).multiple(0.01),
  pictures: joi.array().min(3).max(5).items(joi.string().uri()),
  category: joi.string()
});

export { newProductSchema };
