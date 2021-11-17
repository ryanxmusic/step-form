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
            - add necessary fields[inputs, checkboxes] based on selected product
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
            firstName: { value: '' },
            lastName: { value: '' },
            email: { value: '' },
            product: { value: '' }
        },
        stepTwo: {
            feature1: { value: false },
            feature2: { value: false },
            mentions: { value: '' }
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
                    value: e.target.value || !!e.target.checked
                }
            }
        }));
    };
    console.log(formData);

    const submitHandler = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('firstName', formData.stepOne.firstName);
        data.append('lastName', formData.stepOne.lastName);
        data.append('email', formData.stepOne.email);
        data.append('product', formData.stepOne.product);

        data.append('feature1', formData.stepTwo.feature1);
        data.append('feature1', formData.stepTwo.feature2);
        data.append('feature1', formData.stepTwo.mentions);
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
                    onChange={changeHandler}
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

const Step = ({ title, onChange, step, stepKey, onPrevStep, onNextStep }) => {
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

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => onChange(stepKey, e)}
                    />

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
            {step === 2 && (
                <div className="d-flex flex-column my-5">
                    <h5>Product name</h5>

                    <Checkbox
                        id="feature1"
                        name="feature1"
                        label="Feature 1"
                        onChange={(e) => onChange(stepKey, e)}
                    />
                    <Checkbox
                        id="feature2"
                        name="feature2"
                        label="Feature 1"
                        onChange={(e) => onChange(stepKey, e)}
                    />

                    <Input
                        id="height"
                        type="number"
                        name="height"
                        placeholder="Height"
                        onChange={(e) => onChange(stepKey, e)}
                    />

                    <Input
                        id="width"
                        type="number"
                        name="width"
                        placeholder="Width"
                        onChange={(e) => onChange(stepKey, e)}
                    />

                    <Textarea
                        id="mentions"
                        name="mentions"
                        label="Mentions"
                        onChange={(e) => onChange(stepKey, e)}
                    />
                </div>
            )}

            {/* @Step3 */}
            {step === 3 && (
                <div className="d-flex flex-column my-5">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5>Name</h5>
                            <span>John Doe</span>
                        </li>
                        <li className="list-group-item">
                            <h5>Email</h5>
                            <span>address@mail.com</span>
                        </li>
                        <li className="list-group-item">
                            <h5>Product:</h5>
                            <span>Product1</span>
                        </li>
                        <li className="list-group-item">
                            <h5>Feature1:</h5>
                            <span>Yes/No</span>
                        </li>
                        <li className="list-group-item">
                            <h5>Feature1:</h5>
                            <span>Yes/No</span>
                        </li>
                        <li className="list-group-item">
                            <h5>Height:</h5>
                            <span>560cm</span>
                        </li>
                        <li className="list-group-item">
                            <h5>Width:</h5>
                            <span>140cm</span>
                        </li>
                        <li className="list-group-item">
                            <h5>Mentions:</h5>
                            <span>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam dolor ducimus nemo
                                eveniet laudantium accusantium? Excepturi facere
                                vel voluptatem nemo.
                            </span>
                        </li>
                    </ul>
                </div>
            )}

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

const Input = ({ id, type, placeholder, name, value, onChange }) => {
    return (
        <input
            className="form-control my-2"
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
        />
    );
};

const Select = ({ name, value, onChange }) => {
    return (
        <select
            className="form-control my-2"
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

const Checkbox = ({ id, name, label, value, onChange }) => {
    return (
        <div className="form-check my-2">
            <input
                className="form-check-input"
                id={id}
                name={name}
                type="checkbox"
                value={value}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

const Textarea = ({ id, name, label, value, onChange }) => {
    return (
        <div className="my-2">
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
            <textarea
                className="form-control"
                id={id}
                name={name}
                type="checkbox"
                value={value}
                onChange={onChange}
                rows="3"
            />
        </div>
    );
};
