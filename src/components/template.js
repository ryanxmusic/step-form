import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const productRequirements = [
    {
        name: 'Product1',
        inputs: ['color'],
        mentions: true
    },
    {
        name: 'Product2',
        inputs: ['height'],
        mentions: true
    },
    {
        name: 'Product3',
        inputs: ['height', 'width'],
        mentions: true
    }
];
const FormHandler = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        stepOne: {
            firstName: {
                value: '',
                required: false,
                type: 'input',
                placeholder: 'First name'
            },
            lastName: {
                value: '',
                required: false,
                type: 'input',
                placeholder: 'Last name'
            },
            email: {
                value: '',
                email: false,
                type: 'input',
                placeholder: 'Email'
            },
            product: {
                value: '',
                required: true,
                type: 'select',
                choices: [
                    { value: '', label: 'Choose desired product' },
                    { value: 'Product1', label: 'Product1' },
                    { value: 'Product2', label: 'Product2' },
                    { value: 'Product3', label: 'Product3' },
                    { value: 'Product4', label: 'Product4' },
                    { value: 'Product5', label: 'Product5' },
                    { value: 'Product6', label: 'Product6' },
                    { value: 'Product7', label: 'Product7' },
                    { value: 'Product8', label: 'Product8' },
                    { value: 'Product9', label: 'Product9' },
                    { value: 'Product10', label: 'Product10' },
                    { value: 'Product11', label: 'Product11' },
                    { value: 'Product12', label: 'Product12' }
                ]
            }
        },
        stepTwo: {
            checkbox1: {
                id: 'checkbox1',
                type: 'checkbox',
                value: 'checkbox1',
                label: 'Feature 1',
                checked: false
            },
            checkbox2: {
                id: 'checkbox2',
                type: 'checkbox',
                value: 'checkbox2',
                label: 'Feature 2',
                checked: false
            },
            color: {
                value: '',
                required: false,
                type: 'input',
                placeholder: 'Color'
            },
            height: {
                value: '',
                required: false,
                type: 'input',
                placeholder: 'Height'
            },
            width: {
                value: '',
                required: false,
                type: 'input',
                placeholder: 'Width'
            },
            mentions: {
                value: '',
                id: 'mentions',
                label: 'Mentions',
                required: false,
                type: 'textarea'
            }
        }
    });
    const [step2State, setStep2State] = useState({});

    const [errors, setErrors] = useState({});
    const changeHandler = (step, e) => {
        e.persist();

        setFormData((prev) => ({
            ...prev,
            [step]: {
                ...prev[step],
                [e.target.name]: {
                    ...prev[step][e.target.name],
                    checked: !!e.target.checked,
                    value: e.target.value
                }
            }
        }));
    };

    const stepChangeHandler = (values, e) => {
        e.preventDefault();
        const newErrors = validate(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setStep(step + 1);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('firstName', formData.stepOne.firstName.value);
        data.append('lastName', formData.stepOne.lastName.value);
        data.append('email', formData.stepOne.email.value);
        data.append('product', formData.stepOne.product.value);

        data.append('checkbox1', formData.stepTwo.checkbox1.checked);
        data.append('checkbox2', formData.stepTwo.checkbox2.checked);
        data.append('color', formData.stepTwo.color.value);
        data.append('height', formData.stepTwo.height.value);
        data.append('width', formData.stepTwo.width.value);
        data.append('mentions', formData.stepTwo.mentions.value);
    };

    return (
        <form onSubmit={submitHandler}>
            {step === 1 && (
                <Step
                    title="Step 1"
                    step={1}
                    stepKey="stepOne"
                    data={formData.stepOne}
                    onChange={changeHandler}
                    step2State={step2State}
                    setStep2State={setStep2State}
                    onStepChange={stepChangeHandler}
                    errors={errors}
                />
            )}
            {step === 2 && (
                <>
                    <Step
                        title={`Product requirements | ${formData.stepOne.product.value}`}
                        step={2}
                        product={formData.stepOne.product.value}
                        stepKey="stepTwo"
                        step2State={step2State}
                        setStep2State={setStep2State}
                        onStepChange={stepChangeHandler}
                        onPrevStep={(step) => setStep(step)}
                        errors={errors}
                    />
                </>
            )}
            {step === 3 && (
                <Preview
                    onPrevStep={() => setStep(step - 1)}
                    step2State={step2State}
                    data={[
                        {
                            label: 'First Name',
                            value: formData.stepOne.firstName.value
                        },
                        {
                            label: 'Name',
                            value: formData.stepOne.lastName.value
                        },
                        { label: 'Email', value: formData.stepOne.email.value },
                        {
                            label: 'Product',
                            value: formData.stepOne.product.value
                        },
                        {
                            label: 'Feature1',
                            value: formData.stepTwo.checkbox1.checked
                                ? 'Yes'
                                : 'No'
                        },
                        {
                            label: 'Feature2',
                            value: formData.stepTwo.checkbox2.checked
                                ? 'Yes'
                                : 'No'
                        }
                        // {
                        //     label: 'Color',
                        //     value: formData.stepTwo.color.value
                        // },
                        // {
                        //     label: 'Height',
                        //     value: formData.stepTwo.height.value
                        // },
                        // {
                        //     label: 'Width',
                        //     value: formData.stepTwo.width.value
                        // },
                        // {
                        //     label: 'Mentions',
                        //     value: formData.stepTwo.mentions.value
                        // }
                    ]}
                />
            )}
        </form>
    );
};

export default FormHandler;

const Step = ({
    data,
    onChange,
    onStepChange,
    errors,
    stepKey,
    step,
    onPrevStep,
    title,
    product,
    setStep2State,
    step2State
}) => {
    let output = [];
    if (step !== 2) {
        for (const [key, val] of Object.entries(data)) {
            if (val.type.split(':')[0] === 'input') {
                output.push(
                    <Input
                        key={key}
                        placeholder={val.placeholder}
                        name={key}
                        value={val.value}
                        onChange={(e) => onChange(stepKey, e)}
                        error={errors[key]}
                        type={val.type.split(':')[1]}
                    />
                );
            } else if (val.type === 'select') {
                output.push(
                    <Select
                        key={key}
                        name={key}
                        value={val.value}
                        onChange={(e) => {
                            setStep2State({});
                            onChange(stepKey, e);
                        }}
                        error={errors[key]}
                        choices={val.choices}
                    />
                );
            } else if (val.type === 'textarea') {
                output.push(
                    <Textarea
                        key={key}
                        name={key}
                        id={val.id}
                        label={val.label}
                        value={val.value}
                        onChange={(e) => onChange(stepKey, e)}
                        error={errors[key]}
                    />
                );
            } else if (val.type === 'checkbox') {
                output.push(
                    <Checkbox
                        key={key}
                        name={key}
                        id={val.id}
                        label={val.label}
                        value={val.value}
                        checked={val.checked}
                        onChange={(e) => onChange(stepKey, e)}
                    />
                );
            }
        }
    }

    return (
        <Fragment>
            <h4 className="text-center mb-5">{title}</h4>

            {step === 2 ? (
                <ProductRequirement
                    step2State={step2State}
                    setStep2State={setStep2State}
                    product={product}
                />
            ) : (
                output
            )}

            {step > 1 && (
                <button
                    type="button"
                    className="button is-warning mr-2"
                    onClick={() => onPrevStep(step - 1)}
                >
                    Go back
                </button>
            )}
            <button
                type="button"
                className="button is-link"
                onClick={(e) => onStepChange(data, e)}
            >
                Next
            </button>
        </Fragment>
    );
};

Step.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onFileChange: PropTypes.func,
    onStepChange: PropTypes.func.isRequired,
    errors: PropTypes.object,
    stepKey: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    onPrevStep: PropTypes.func
};

const Input = ({
    type = 'text',
    placeholder,
    name,
    value,
    onChange,
    error
}) => {
    return (
        <div className="my-1">
            <input
                className={error ? 'input is-danger' : 'input'}
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
            {error && <div className="has-text-danger-dark">{error}</div>}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func.isRequired
};

const ProductRequirement = ({
    product,
    value,
    onChange,
    step2State,
    setStep2State
}) => {
    const productRequirement = productRequirements.find(
        (item) => item.name === product
    );

    const handleStep2Change = (e) => {
        console.log(step2State);
        setStep2State({ ...step2State, [e.target.name]: e.target.value });
    };
    return (
        <>
            <h5>am i idiot?</h5>
            {productRequirement.inputs.map((input) => (
                <div key={input} className="d-flex flex-column">
                    <label htmlFor={input}>{input} </label>
                    <input
                        id={input}
                        value={step2State[input]}
                        onChange={handleStep2Change}
                        name={input}
                    />
                </div>
            ))}
        </>
    );
};

const Select = ({ name, value, onChange, choices, error }) => {
    return (
        <div className="mb-5">
            <div
                className={
                    error
                        ? 'select is-fullwidth is-danger'
                        : 'select is-fullwidth'
                }
            >
                <select name={name} value={value} onChange={onChange}>
                    {choices.map((choice, index) => (
                        <option key={index} value={choice.value}>
                            {choice.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && <div className="has-text-danger-dark">{error}</div>}
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    choices: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
        })
    ).isRequired,
    error: PropTypes.string
};

const Textarea = ({
    type = 'textarea',
    id,
    label,
    name,
    value,
    onChange,
    error
}) => {
    return (
        <div className="d-flex flex-column my-1">
            <label htmlFor={id}>{label}</label>
            <textarea
                className={error ? 'input is-danger' : 'input'}
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                rows="4"
            />
            {error && <div className="has-text-danger-dark">{error}</div>}
        </div>
    );
};

Textarea.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func.isRequired
};

const Checkbox = ({
    type = 'checkbox',
    id,
    label,
    name,
    value,
    checked,
    onChange
}) => {
    return (
        <div className="my-1">
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    checked: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func.isRequired
};

const Preview = ({ data, onPrevStep, step2State }) => {
    const step2Keys = Object.keys(step2State);
    return (
        <div className="panel is-primary">
            <h4 className="text-center mb-5">Review</h4>
            <ul className="list-group py-1">
                {data.map((input, index) => (
                    <li key={index} className="list-group-item">
                        <Fragment>
                            <strong>{input.label}:</strong> <br /> {input.value}
                        </Fragment>
                    </li>
                ))}

                {step2Keys.map((key) => (
                    <li key={key} className="list-group-item">
                        <Fragment>
                            <strong>{key}:</strong> <br /> {step2State[key]}
                        </Fragment>
                    </li>
                ))}
            </ul>
            <div>
                <button
                    type="button"
                    className="button is-warning mr-2"
                    onClick={onPrevStep}
                >
                    Go back
                </button>
                <button type="submit" className="button is-primary">
                    Submit form
                </button>
            </div>
        </div>
    );
};

const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validate = (fields) => {
    let errors = {};

    for (let field in fields) {
        const currentField = fields[field];

        if (currentField.required && currentField.value === '') {
            errors[field] = 'This field is required!';
        }

        if (
            currentField.required &&
            currentField.file &&
            !currentField.value.name
        ) {
            errors[field] = 'This field is required!';
        }

        if (
            !errors[field] &&
            currentField.email &&
            !validateEmail(currentField.value)
        ) {
            errors[field] = 'Invalid email address';
        }

        if (
            !errors[field] &&
            currentField.minLength &&
            currentField.value.trim().length < currentField.minLength
        ) {
            errors[
                field
            ] = `This field must have at least ${currentField.minLength} characters`;
        }
    }

    return errors;
};
