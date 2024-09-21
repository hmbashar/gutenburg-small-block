import "./editor.scss";

import { useBlockProps, BlockControls, InspectorControls } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import {ToolbarButton, ToolbarGroup, TextControl, PanelBody, ColorPalette} from "@wordpress/components";
import { withState } from '@wordpress/compose';

export default function Edit() {
	const blockprops = useBlockProps({
		className: "Dummy-first-class-edit-here",
	});

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton icon="edit" title="Edit" onClick={() => console.log("Edit Clicked")} />
					<ToolbarButton icon="trash" title="Delete" onClick={() => console.log("Detele Clicked")} />
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton icon="admin-plugins" title="Plugin" onClick={() => console.log("Plugin Clicked")} />
					<ToolbarButton icon="admin-tools" title="Tools" onClick={() => console.log("Tools Clicked")} />
				</ToolbarGroup>
			</BlockControls>
			
			
			<InspectorControls>       
				 
				<PanelBody title="Block Settings" initialOpen={false} icon="admin-settings">
					
					<TextControl
						label="Enter Something"
						onChange={ ( v ) => console.log(v) }
					/>	
				</PanelBody>
			</InspectorControls>
			
			<InspectorControls group="styles">       
				 
				<PanelBody title="Block Style" initialOpen={false} icon="admin-generic">					
					
					<ColorPalette 
						onChange={ ( color ) => console.log(color)  } 
					/>
					
				</PanelBody>
			</InspectorControls>
			
			<InspectorControls group="styles">       
				 
				<PanelBody title="Block Style" initialOpen={false} icon="admin-generic">					
					
					<ColorPalette 
						onChange={ ( color ) => console.log(color)  } 
					/>
					
				</PanelBody>
			</InspectorControls>



			<div {...blockprops}>Editor Part</div>
		</Fragment>
	);
}
