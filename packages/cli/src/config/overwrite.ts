import {RenderInternals} from '@remotion/renderer';

let shouldOverwrite = RenderInternals.DEFAULT_OVERWRITE;

export const setOverwriteOutput = (newOverwrite: boolean) => {
	if (typeof newOverwrite !== 'boolean') {
		throw new Error(
			`overwriteExisting must be a boolean but got ${typeof newOverwrite} (${JSON.stringify(
				newOverwrite
			)})`
		);
	}

	shouldOverwrite = newOverwrite;
};

export const getShouldOverwrite = () => shouldOverwrite;
