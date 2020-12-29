const groupingState = (
	name: string,
	hookS: any,
	changeHookS: (arg1: any) => void
) => {
	const nameSet: string = 'onChange' + (name.charAt(0).toUpperCase() + name.slice(1));

	const objData: any = {};

	objData[`${name}`] = hookS;
	objData[`${nameSet}`] = changeHookS;

	return objData;
};

export default groupingState;