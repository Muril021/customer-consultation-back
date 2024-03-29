import { check } from "express-validator";

const name = check('name').notEmpty()
  .withMessage('The field name is required.')
  .isString().withMessage('The field name must be a string.')
  .isLength({ min: 3 }).withMessage('The field name must have at least 3 characters.')
  .trim()

const type = check('type').custom(value => {
    const types = ['Pessoa Física', 'Pessoa Jurídica'];

    if (!types.includes(value)) {
      throw new Error('Select a specific type.');
    }

    return true;
  })

const doc = check('doc').notEmpty()
  .withMessage('Enter a document number.')
  .custom((value, { req }) => {
    const selected = req.body.type;
    const patt = /^\d+$/;

    if (!patt.test(value)) {
      throw new Error('The field doc must only have numbers.');
    }

    if (selected === 'Pessoa Física' && value.length !== 11) {
      throw new Error('The field doc must have 11 characters.');
    }

    if (selected === 'Pessoa Jurídica' && value.length !== 14) {
      throw new Error('The field doc must have 14 characters.');
    }

    return true;
  })

const phones = check('phones').custom((values) => {
  if (values && Array.isArray(values)) {
    const patt = /^\d+$/

    for (const value of values) {
      if (!patt.test(value)) {
        throw new Error('The field phones must only have numbers.');
      }
    
      if (value.length !== 10 || value.length !== 11) {
        throw new Error('The field phones must have between 10 and 11 characters.');
      }
    }
  }

  return true;
})

const validator = [ name, type, doc, phones ];

export default { validator };