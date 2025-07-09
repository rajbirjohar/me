type Arg =
	| string
	| { [key: string]: string }
	| { [key: string]: boolean }
	| string[]
	| undefined
	| null
	| false;

type ClassValue = Arg | Arg[];

const hasOwn = Object.prototype.hasOwnProperty;

// Main function to concatenate class names based on the arguments provided
const cn = (...args: ClassValue[]): string => {
	let classes = "";

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg) {
			classes = appendClass(classes, parseValue(arg as Arg));
		}
	}

	return classes;
};

// Function to parse a single argument value to a string class name
const parseValue = (arg: Arg): string => {
	if (typeof arg === "string") {
		return arg;
	}

	if (!arg || typeof arg !== "object") {
		return "";
	}

	if (Array.isArray(arg)) {
		// Using spread operator to pass array elements as separate arguments
		return cn(...arg);
	}

	if (
		arg.toString !== Object.prototype.toString &&
		!arg.toString.toString().includes("[native code]")
	) {
		return arg.toString();
	}

	let classes = "";

	for (const key in arg) {
		if (hasOwn.call(arg, key) && arg[key]) {
			classes = appendClass(classes, key);
		}
	}

	return classes;
};

// Helper function to append a new class name to the existing list of class names
const appendClass = (value: string, newClass: string): string => {
	return value ? `${value} ${newClass}` : newClass;
};

export { cn };
