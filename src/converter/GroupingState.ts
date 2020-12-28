const groupingState = (
	name: string,
	hookS: any,
	setHookS: (arg1: any) => void
) => {
	const nameSet: string = 'set' + (name.charAt(0).toUpperCase() + name.slice(1));

	const objData: any = new Object();

	objData[`${name}`] = hookS;
	objData[`${nameSet}`] = setHookS;

	return objData;
};

export default groupingState;