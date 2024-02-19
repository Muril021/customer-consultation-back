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

const doc = check('doc').custom((value, { req }) => {
  const selected = req.body.type;
  const numberValue = String(value).length;

  if (typeof value !== 'number') {
    throw new Error('The field doc must be a number.');
  }

  if (selected === 'Pessoa Física' && numberValue !== 11) {
    throw new Error('The field doc must have 11 characters.');
  }

  if (selected === 'Pessoa Jurídica' && numberValue !== 14) {
    throw new Error('The field doc must have 14 characters.');
  }

  return true;
})

const tel = check('tel').custom(value => {
  if (value) {
    const number = String(value).length;

    if (number !== 10 && number !== 11) {
      throw new Error('The field tel must have between 10 and 11 characters.');
    }
  }

  return true;
})

const validator = [ name, type, doc, tel ];

export default { validator };