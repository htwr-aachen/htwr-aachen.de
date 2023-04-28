import type { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useMemo, useState } from "react";

type SolutionCalculatorProps = {
  name: string;
  description?: string;
  solutionFunction: (inputVars: InputVarsType) => any;
  children?: ReactNode;
};

type InputVarsType = {
  [key: string]: number;
};

type InputContextType = [
  inputVars: InputVarsType,
  setInputVars: Dispatch<SetStateAction<InputVarsType>>
];

const InputContext = createContext<InputContextType | null>(null);

const SolutionCalculator: FC<SolutionCalculatorProps> = (props) => {
  const [inputVars, setInputVars] = useState<InputVarsType>({});
  const solution = useMemo(() => {
    try {
      return props.solutionFunction(inputVars);
    } catch (error) {
      return "Fehler gebe bitte alle Variablen ein";
    }
  }, [inputVars]);

  return (
    <InputContext.Provider value={[inputVars, setInputVars]}>
      <div className="rounded-lg bg-gray-100 px-10 py-8 text-lg">
        <h3 className="text-2xl font-semibold">Aufgabe {props.name}</h3>
        <p className="font-serif my-2 px-4">{props.description}</p>
        <p className="px-4 ">{props.children}</p>
        <h3 className="mt-8 text-center text-4xl font-medium">
          Lösung: {solution}
        </h3>
      </div>
    </InputContext.Provider>
  );
};

type SolutionViewProps = {
  name: string;
  description?: string;
  solution: any;
  children: ReactNode;
};

const SolutionView: FC<SolutionViewProps> = (props) => {
  return (
    <div className="rounded-lg bg-gray-100 px-10 py-8 text-lg">
      <h3 className="text-2xl font-semibold">Aufgabe {props.name}</h3>
      <p className="font-serif my-2 px-4">{props.description}</p>
      <p className="px-4 ">{props.children}</p>
      <h3 className="mt-8 text-center text-4xl font-medium">
        Lösung: {props.solution}
      </h3>
    </div>
  );
};

type NumberInputProps = {
  name: string;
};

const NumberInput: FC<NumberInputProps> = ({ name }) => {
  const [inputVars, setInputVars] = useContext(
    InputContext
  ) as InputContextType;

  return (
    <input
      className="rounded-lg border-b-1 border-black bg-gray-300 px-2 py-1 placeholder:text-black/60"
      placeholder={name}
      type="number"
      onChange={(x) => {
        setInputVars({ ...inputVars, [name]: x.target.valueAsNumber });
      }}
    />
  );
};

export { InputContext, NumberInput, SolutionCalculator, SolutionView };
