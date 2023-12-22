import {
  DetailedHTMLProps,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from 'react';

type DropdownsProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: (number | string)[];
  name: string;
};

const SelectMenu: React.FC<DropdownsProps> = ({ options, name, ...props }) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="capitalize mr-3">
        {name}
      </label>
      <select
        id={name}
        className="p-1 border rounded"
        name={name}
        {...props}>
        {options.map(item => (
          <option
            key={item}
            value={String(item)}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export { SelectMenu as Dropdowns };
