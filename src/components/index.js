import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuoteStyles = styled.div`
    form {
        width: 500px;
        background: white;
        padding: 30px 20px 40px 20px;
        border-radius: 5px;
        box-shadow: 0 10px 25px black;
    }
`;

const productRequirements = [
    {
        name: 'Product 1',
        radios: {
            name: 'Radio 1',
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' }
            ]
        },
        checkboxes: {
            required: true,
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' }
            ]
        },
        inputs: [{ value: 'color', label: 'Color' }]
    },
    {
        name: 'Product 2',
        radios: {
            name: 'Radio 1',
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' }
            ]
        },
        checkboxes: {
            required: false,
            options: [
                { value: 'option1', label: 'Optiunea 1' },
                { value: 'option2', label: 'Optiunea 2' },
                { value: 'option3', label: 'Optiunea 3' }
            ]
        },
        inputs: [{ value: 'height', label: 'Height' }]
    },
    {
        name: 'Product 3',
        checkboxes: {
            required: false,
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' }
            ]
        },
        radios: {
            name: 'Radio 1',
            options: [
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' }
            ]
        },
        inputs: [
            { value: 'height', label: 'Height' },
            { value: 'width', label: 'Width' }
        ]
    }
];

const QuoteForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        stepOne: {
            firstName: {
                as: 'input',
                value: '',
                required: false,
                type: 'text',
                placeholder: 'First Name'
            },
            lastName: {
                as: 'input',
                value: '',
                required: false,
                type: 'text',
                placeholder: 'Last Name'
            },
            email: {
                as: 'input',
                value: '',
                email: false,
                type: 'email',
                placeholder: 'Email'
            },
            product: {
                value: '',
                required: true,
                type: 'select',
                choices: [
                    { value: '', label: 'Choose your desired product' },
                    { value: 'Product 1', label: 'Product 1' },
                    { value: 'Product 2', label: 'Product 2' },
                    { value: 'Product 3', label: 'Product 3' },
                    { value: 'Product 4', label: 'Product 4' },
                    { value: 'Product 5', label: 'Product 5' },
                    { value: 'Product 6', label: 'Product 6' },
                    { value: 'Product 7', label: 'Product 7' },
                    { value: 'Product 8', label: 'Product 8' },
                    { value: 'Product 9', label: 'Product 9' }
                ]
            }
        },
        stepTwo: {
            product1: {
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
                radioGroup: {
                    required: true,
                    radio1: {
                        id: 'radio1',
                        checked: false,
                        type: 'radio'
                    },
                    radio2: {
                        id: 'radio2',
                        checked: false,
                        type: 'radio'
                    }
                },
                color: {
                    as: 'input',
                    id: 'color',
                    value: '',
                    required: true,
                    type: 'number',
                    placeholder: 'Color'
                },
                height: {
                    as: 'input',
                    id: 'height',
                    value: '',
                    required: true,
                    type: 'number',
                    placeholder: 'Height'
                },
                width: {
                    as: 'input',
                    id: 'width',
                    value: '',
                    required: true,
                    type: 'number',
                    placeholder: 'Width'
                },
                mentions: {
                    id: 'mentions',
                    value: '',
                    required: false,
                    type: 'textarea',
                    label: 'Mentions'
                }
            },
            product2: {
                checkbox2: {
                    id: 'checkbox2',
                    type: 'checkbox',
                    value: 'checkbox2',
                    label: 'Feature 2',
                    checked: false
                },
                height: {
                    as: 'input',
                    id: 'height',
                    value: '',
                    required: true,
                    type: 'number',
                    placeholder: 'Height'
                },
                width: {
                    as: 'input',
                    id: 'width',
                    value: '',
                    required: true,
                    type: 'number',
                    placeholder: 'Width'
                },
                mentions: {
                    id: 'mentions',
                    value: '',
                    required: false,
                    type: 'textarea',
                    label: 'Mentions'
                }
            },
            product3: {
                checkbox2: {
                    id: 'checkbox2',
                    type: 'checkbox',
                    value: 'checkbox2',
                    label: 'Feature 2',
                    checked: false
                },
                radioGroup: {
                    required: true,
                    radio1: {
                        id: 'radio1',
                        checked: false,
                        type: 'radio'
                    },
                    radio2: {
                        id: 'radio2',
                        checked: false,
                        type: 'radio'
                    },
                    radio3: {
                        id: 'radio3',
                        checked: false,
                        type: 'radio'
                    }
                },
                color: {
                    as: 'input',
                    id: 'color',
                    value: '',
                    required: true,
                    type: 'text',
                    placeholder: 'Color'
                },
                mentions: {
                    id: 'mentions',
                    value: '',
                    required: false,
                    type: 'textarea',
                    label: 'Mentions'
                }
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
    };

    return (
        <QuoteStyles>
            <form onSubmit={submitHandler}>
                {step === 1 && (
                    <Step
                        title="Get a Quote"
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
                            title="Product Requirements"
                            subtitle={`${formData.stepOne.product.value}`}
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
                                label: 'Last Name',
                                value: formData.stepOne.lastName.value
                            },
                            {
                                label: 'Email',
                                value: formData.stepOne.email.value
                            },
                            {
                                label: 'Product',
                                value: formData.stepOne.product.value
                            }
                        ]}
                    />
                )}
            </form>
        </QuoteStyles>
    );
};

export default QuoteForm;

const Step = ({
    data,
    onChange,
    onStepChange,
    errors,
    stepKey,
    step,
    onPrevStep,
    title,
    subtitle,
    product,
    setStep2State,
    step2State
}) => {
    let output = [];
    if (step !== 2) {
        for (const [key, val] of Object.entries(data)) {
            if (val.as === 'input') {
                output.push(
                    <Input
                        key={key}
                        placeholder={val.placeholder}
                        name={key}
                        value={val.value}
                        onChange={(e) => onChange(stepKey, e)}
                        error={errors[key]}
                        type={val.type}
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
            <h4 className="text-center">{title}</h4>
            <h6 className="text-center">{subtitle}</h6>
            <div className="mb-5" />

            {step === 2 ? (
                <ProductRequirement
                    step2State={step2State}
                    setStep2State={setStep2State}
                    product={product}
                />
            ) : (
                output
            )}

            <div className="d-flex flex-row justify-content-center mt-5">
                {step > 1 && (
                    <button
                        type="button"
                        className="button is-warning mr-2"
                        onClick={() => onPrevStep(step - 1)}
                    >
                        Back
                    </button>
                )}
                <button
                    type="button"
                    className="button is-link"
                    onClick={(e) => onStepChange(data, e)}
                >
                    Next
                </button>
            </div>
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

const Input = ({ type, placeholder, name, value, onChange, error }) => {
    return (
        <div className="my-1">
            <input
                className={error ? 'input is-danger' : 'input form-control'}
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
    console.log(productRequirement);
    const handleStep2Change = (e) => {
        console.log(step2State);
        setStep2State({ ...step2State, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="d-flex flex-row">
                {productRequirement.radios.options.map((option, i) => (
                    <div class="form-check mx-3">
                        <input
                            checked={step2State.selectedRadio === option}
                            onChange={(e) =>
                                setStep2State({
                                    ...step2State,
                                    selectedRadio: e.target.value
                                })
                            }
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id={`exampleRadios${i}`}
                            value={option.value}
                        />
                        <label
                            class="form-check-label"
                            for={`exampleRadios${i}`}
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {productRequirement.checkboxes.required &&
                productRequirement.checkboxes.options.map((option) => (
                    <Checkbox
                        checked={
                            step2State[`checked${option.value}`] === 'true'
                        }
                        name={option.value}
                        id={option.value}
                        label={option.label}
                        onChange={(e) => {
                            setStep2State({
                                ...step2State,
                                [`checked${option.value}`]: JSON.stringify(
                                    e.target.checked
                                )
                            });
                        }}
                    />
                ))}
            {productRequirement.inputs.map((input) => (
                <div key={input} className="d-flex flex-column">
                    <label htmlFor={input.value}>{input.label} </label>
                    <input
                        className="form-control"
                        id={input.value}
                        value={step2State[input]}
                        onChange={handleStep2Change}
                        name={input}
                    />
                </div>
            ))}
            <Textarea
                value={step2State['textarea'] || ''}
                onChange={(e) => {
                    console.log(step2State);
                    setStep2State({ ...step2State, textarea: e.target.value });
                }}
            />
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
                <select
                    className="form-control"
                    name={name}
                    value={value}
                    onChange={onChange}
                >
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

const Textarea = ({ type = 'textarea', id, name, value, onChange }) => {
    return (
        <div className="d-flex flex-column my-1">
            <label htmlFor={id}>Mentions</label>
            <textarea
                className="form-control"
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                rows="4"
            />
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
            <h4 className="text-center mb-5">Preview</h4>
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

            <div className="d-flex flex-row justify-content-center">
                <button
                    type="button"
                    className="button is-warning mr-2"
                    onClick={onPrevStep}
                >
                    Back
                </button>
                <button type="submit" className="button is-primary">
                    Submit
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
