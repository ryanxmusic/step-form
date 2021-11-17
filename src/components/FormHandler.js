import React, { useState } from 'react';

const productInfo = [
    {
        name: 'Select desired product'
    },
    {
        name: 'Product1',
        value: 'Product1',
        inputs: ['color', 'height', 'width'],
        mentions: true
    },
    {
        name: 'Product2',
        value: 'Product2',
        inputs: ['height', 'width'],
        mentions: true
    },
    {
        name: 'Product3',
        value: 'Product3',
        inputs: ['height', 'width'],
        mentions: true
    }
];

const FormHandler = () => {
    /*
        #STEP 1
            - firstName, lastName, eMail inputs
            - product select
        #STEP 2
            - add necessary fields[inputs, checboxes] based on selected product
            - all products must have textarea
        #STEP 3
            - review inputted data at previous steps
    */

    const [step, setStep] = useState(1);
    const onNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const [formData, setFormData] = useState({
        stepOne: {
            firstName: '',
            lastName: '',
            email: '',
            product: ''
        }
    });

    const changeHandler = (step, e) => {
        e.persist();

        setFormData((prev) => ({
            ...prev,
            [step]: {
                ...prev[step],
                [e.target.name]: {
                    ...prev[step][e.target.name],
                    value: e.target.value
                }
            }
        }));
    };
    console.log(formData);

    const submitHandler = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('firstName', formData.stepOne.firstName.value);
        data.append('lastName', formData.stepOne.lastName.value);
        data.append('email', formData.stepOne.email.value);
        data.append('product', formData.stepOne.product.value);
    };

    return (
        <form onSubmit={submitHandler}>
            {step === 1 && (
                <Step
                    title="Get a quote"
                    step={1}
                    stepKey="stepOne"
                    data={formData.stepOne}
                    onNextStep={onNextStep}
                    onChange={changeHandler}
                />
            )}
            {step === 2 && (
                <Step
                    title="Product requirements"
                    step={2}
                    stepKey="stepTwo"
                    onPrevStep={(step) => setStep(step)}
                    onNextStep={onNextStep}
                />
            )}
            {step === 3 && (
                <Step
                    title="Data review"
                    step={3}
                    stepKey="stepThree"
                    onPrevStep={(step) => setStep(step)}
                    onNextStep={onNextStep}
                />
            )}
        </form>
    );
};

export default FormHandler;

const Step = ({
    title,
    data,
    onChange,
    step,
    stepKey,
    onPrevStep,
    onNextStep
}) => {
    return (
        <>
            <h3 className="text-center">
                {step}. {title}
            </h3>

            {/* @Step1 */}
            {step === 1 && (
                <div className="d-flex flex-column my-5">
                    <div className="row">
                        <div className="col">
                            <Input
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                onChange={(e) => onChange(stepKey, e)}
                            />
                        </div>
                        <div className="col">
                            <Input
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={(e) => onChange(stepKey, e)}
                            />
                        </div>
                    </div>

                    <div className="my-3" />

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => onChange(stepKey, e)}
                    />

                    <div className="my-3" />

                    <Select
                        name=""
                        type="select"
                        id="productSelect"
                        name="product"
                        onChange={(e) => onChange(stepKey, e)}
                    />
                </div>
            )}

            {/* @Step2 */}
            {step === 2 && <div className="d-flex flex-column my-5"></div>}

            <div className="d-flex flex-row justify-content-center">
                {step > 1 && (
                    <button
                        type="button"
                        className="button is-warning mr-2"
                        onClick={() => onPrevStep(step - 1)}
                    >
                        Back
                    </button>
                )}

                {step < 3 && (
                    <button
                        type="button"
                        className="button is-link"
                        onClick={(e) => onNextStep(e)}
                    >
                        Next
                    </button>
                )}

                {step === 3 && (
                    <button type="button" className="button">
                        Submit
                    </button>
                )}
            </div>
        </>
    );
};

const Input = ({ type, placeholder, name, value, onChange }) => {
    return (
        <div className="my-1">
            <input
                className="form-control"
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    );
};

const Select = ({ name, value, onChange }) => {
    return (
        <select
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
        >
            {productInfo.map((item, index) => (
                <option value={item.name} key={index}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};
