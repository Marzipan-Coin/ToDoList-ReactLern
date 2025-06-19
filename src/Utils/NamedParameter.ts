import Parameter from "./Parameter";

type NamedParameter<T> = Parameter<T> & {
    name : string
}

export default NamedParameter;