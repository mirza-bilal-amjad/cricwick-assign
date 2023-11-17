import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Psl2023 from "../screens/side_drawer_screens/PSL2023";
import FeaturedContentCardGHome
	from "../components/comp.mainbottomtabscreen/Home/GenericHome/FeaturedContent/FeaturedContentCardGHome";


const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path="/Psl2023">
				<Psl2023/>
			</ComponentPreview>
			<ComponentPreview
				path="/FeaturedContentCardGHome">
				<FeaturedContentCardGHome/>
			</ComponentPreview>
		</Previews>
	);
};

export default ComponentPreviews;