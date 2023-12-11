import React from 'react';
import {
	// 	Button,
	// 	Cascader,
	Checkbox,
	// 	ColorPicker,
	// 	DatePicker,
	// 	Form,
	Input,
	Typography,
	// 	InputNumber,
	// 	Radio,
	// 	Select,
	// 	Slider,
	// 	Switch,
	// 	TreeSelect,
	// 	Upload,
} from 'antd';
import { PermitBox } from '../../modules/permitBlox/PermitBox';

const discriptionOfActivityNL = {
	activity: [
		{ name: 'Activiteiten' },

		[
			{
				key: 'disassemble_assemble',
				label: 'Demontage/ montage',
				checked: false,
			},
			{
				key: 'opening_of_installation',
				label: 'Openleggen installatie',
				checked: false,
			},
			{
				key: 'inspection_activity',
				label: 'Inspectiewerken',
				checked: false,
			},
			{
				key: 'maintenance_activity',
				label: 'Onderhoudswerken',
				checked: false,
			},
			{ key: 'welding', label: 'Lassen', color: 'red', checked: false },
			{
				key: 'flame_cutting',
				label: 'Slijpen/ Branden',
				color: 'red',
				checked: false,
			},
			{
				key: 'brazing_soldering',
				label: 'Solderen',
				color: 'red',
				checked: false,
			},
			{ key: 'open_flame', label: 'Open vlam', color: 'red', checked: false },
			{ key: 'insulation_works', label: 'Isolatiewerken', checked: false },
			{ key: 'hoisting', label: 'Hijswerken', checked: false },
			{ key: 'digging', label: 'Graafwerken', checked: false },
			{ key: 'painting', label: 'Verfwerken', checked: false },
			{ key: 'scafolding', label: 'Stelling', checked: false },
			{ key: 'high_presure_works', label: 'Hoge druk', checked: false },
		],
	],
	description: [
		{ key: 'description', label: 'Korte omschrijving van de activiteit' },
	],
};

// const riskAssessmentNL = {
// 	RiskOfEnergy: [
// 		{ name: 'Risico Energie' },
// 		[
// 			{
// 				key: 'contact_with_moving_parts',
// 				label: 'Contact met bewegende delen',
// 				checked: false,
// 			},
// 			{
// 				key: 'contact_with_electricity',
// 				label: 'Contact met elektriciteit',
// 				checked: false,
// 			},
// 			{
// 				key: 'inside_elek_cabinet_LV',
// 				label: 'In elektrische kast/ MCC',
// 				checked: false,
// 			},
// 			{
// 				key: 'medium_high_voltage',
// 				label: 'Middenspanning/ Hoogspanning',
// 				checked: false,
// 			},
// 			{
// 				key: 'contact_with_compresses_air',
// 				label: 'Contact met perslucht',
// 				checked: false,
// 			},
// 			{
// 				key: 'contact_with_heat_steam',
// 				label: 'Contact met hitte/ stoom',
// 				checked: false,
// 			},
// 			{
// 				key: 'contact_with_chemicals',
// 				label: 'Contact met chemicalïen',
// 				checked: false,
// 			},
// 			{
// 				key: 'contact_with_gasses',
// 				label: 'Contact met gassen',
// 				checked: false,
// 			},
// 			{ key: 'contact_enery', label: 'Restenergie', checked: false },
// 			{
// 				key: 'working_with_power_switch_ON',
// 				label: 'Werken onder energie',
// 				color: 'red',
// 				checked: false,
// 			},
// 		],
// 	],
// 	RiskOfAreaSurroundingst: [
// 		{ name: 'Risico omgeving' },
// 		[
// 			{ key: 'confined_space', label: 'Besloten ruimte', checked: false },
// 			{ key: 'difficult_access', label: 'Moeilijke', checked: false },
// 			{ key: 'traffic', label: 'Verkeer', checked: false },
// 			{ key: 'noise', label: 'Lawaai', checked: false },
// 			{ key: 'atex_zone', label: 'ATEX zone', color: 'red', checked: false },
// 			{ key: 'hoisting_activities', label: 'Hijswerken', checked: false },
// 			{
// 				key: 'dust_dirt_low_visibiloity',
// 				label: 'Stof/ vuil/ weining verlichting',
// 				checked: false,
// 			},
// 			{
// 				key: 'insufficient_ventilation',
// 				label: 'Onvoldoende ventilatie',
// 				checked: false,
// 			},
// 		],
// 	],
// 	RiskWorkingHeight: [
// 		{ name: 'Risico werken op hoogte (>2m voethoogte)' },
// 		[
// 			{ key: 'working_on_crane', label: 'Werken op de kraan', checked: false },
// 			{ key: 'use_of_ladder', label: 'Ladder', checked: false },
// 			{ key: 'use_of_soldering', label: 'Stelling', checked: false },
// 			{
// 				key: 'use_of_mobile_platform_manual',
// 				label: 'Mobiel platform',
// 				checked: false,
// 			},
// 			{
// 				key: 'use_of_mobile_platform_powered',
// 				label: 'Hoogtewerker',
// 				checked: false,
// 			},
// 			{
// 				key: 'use_ladder_near_handrail',
// 				label: 'Op ladder op <2m van leuning',
// 				checked: false,
// 			},
// 			{ key: 'working_on_roof', label: 'Werken op daken', checked: false },
// 			{
// 				key: 'opening_pits_floors',
// 				label: 'Openleggen putten/ vloeren',
// 				checked: false,
// 			},
// 			{
// 				key: 'making_of_holes_openings',
// 				label: 'Maken van gaten/ openingen',
// 				checked: false,
// 			},
// 			{
// 				key: 'use_of_fixed_ankerline_safe_line',
// 				label: 'Vast ankerpunten of leeflijn',
// 				checked: false,
// 			},
// 		],
// 	],
// 	UseOfEquipmentMaterials: [
// 		{ name: 'Gebruikte middelen en materialen' },
// 		[
// 			{ key: 'handtools', label: 'Handgereedschap', checked: false },
// 			{ key: 'measuring_tools', label: 'Meetapparatuur', checked: false },
// 			{
// 				key: 'electrical_tools',
// 				label: 'Elektrisch gereedschap',
// 				checked: false,
// 			},
// 			{ key: 'forklift_other', label: 'Vorklift/ verreiker', checked: false },
// 			{ key: 'crane_excavator', label: 'Kraan/ graafmachine', checked: false },
// 			{
// 				key: 'truck_vacuum_truck',
// 				label: 'Vrachtwagen/ Zuigwagen',
// 				checked: false,
// 			},
// 		],
// 	],
// 	description: [
// 		{
// 			key: 'description',
// 			label: "Extra info/ andere activiteitsgrelateerde risico's",
// 			checked: false,
// 		},
// 	],
// };

// const precautionaryMeasuresNL = {
// 	collectiveProtectionMeasures: [
// 		{ name: 'Collectieve bescherming' },
// 		[
// 			{ key: 'lotto', label: 'Loto', checked: false },
// 			{ key: 'lotto_fishe_nr', label: 'Loto fiche nr.', checked: false },
// 			{
// 				key: 'demarcate_area',
// 				label: 'Afbakenen omgeving / signalisatie',
// 				checked: false,
// 			},
// 			{
// 				key: 'release_form_confined_space',
// 				label: 'Vrijgave formulier besloten ruimte',
// 				checked: false,
// 			},
// 			{
// 				key: 'two_person_present',
// 				label: '2de persoon aanwezig',
// 				checked: false,
// 			},
// 			{ key: 'manhole_guard', label: 'Mangatwacht', checked: false },
// 			{ key: 'earthing', label: 'Aarding', checked: false },
// 			{
// 				key: 'ventilation_oxygen_measurement',
// 				label: 'Ventilatie/ gasmeting',
// 				checked: false,
// 			},
// 			{ key: 'extra_lightning', label: 'Extra verlichting', checked: false },
// 			{
// 				key: 'remove_contained_energy',
// 				label: 'Restenergie verwijderen',
// 				checked: false,
// 			},
// 		],
// 	],
// 	capabilitySkills: [
// 		{ name: 'Geschiktheid/ bekwaamheid' },
// 		[
// 			{
// 				key: 'valid_licensies_certificates',
// 				label: 'Geldige brevetten/ attesten',
// 				checked: false,
// 			},
// 			{
// 				key: 'valid_certificates_of_equipment',
// 				label: 'Geldige keuringen gereedschappen',
// 				checked: false,
// 			},
// 		],
// 	],
// 	personalProtectionMeasures: [
// 		{ name: 'Persoonlijke bescherming' },
// 		[
// 			{ key: 'safety_shoes', label: 'Veiligheidsschoenen', checked: false },
// 			{ key: 'helmet', label: 'Helm', checked: false },
// 			{
// 				key: 'fluo_jacket',
// 				label: 'Fluo-hesje (buiten altijd verlicht)',
// 				checked: false,
// 			},
// 			{
// 				key: 'eye_protection_for_chemicals',
// 				label: 'Bril/ Chemicaliënbril',
// 				checked: false,
// 			},
// 			{ key: 'face_protection', label: 'Gelaatmasker', checked: false },
// 			{ key: 'gloves', label: 'Handschoenen (juiste type)', checked: false },
// 			{ key: 'ear_protection', label: 'Gehoorbescherming', checked: false },
// 			{ key: 'safety_harnas', label: 'Valbescherming', checked: false },
// 			{
// 				key: 'respiratory_protection',
// 				label: 'Ademhalingsbescherming',
// 				checked: false,
// 			},
// 			{
// 				key: 'protective_clothing',
// 				label: 'Beschermende kledij(vb. tyvek)',
// 				checked: false,
// 			},
// 		],
// 	],
// 	firePermitsNecessary: [
// 		{ name: 'Controle vuurvergunning nodig' },
// 		[
// 			{
// 				key: 'always_fire_permit',
// 				label:
// 					'Activiteiten waarbij hitte vrijkomt of activiteit in een ATEX-zone = ALTIJD VUURVERGUNNING',
// 				color: 'red',
// 				checked: false,
// 			},
// 		],
// 	],
// 	description: [
// 		{
// 			key: 'description',
// 			label: 'Extra info/ andere te nemen beheersmaatregelen',
// 			checked: false,
// 		},
// 	],
// };

// console.log(discriptionOfActivityNL);
// console.log(riskAssessmentNL);
// console.log(precautionaryMeasuresNL);

export const WorkpermitForm = () => {
	return (
		<div className="container">
			<div className="description-of-activity text-start">
				<div className="row">
					<PermitBox data={discriptionOfActivityNL}></PermitBox>
				</div>
			</div>
			<div className="risk-assessment"></div>
			<div className="precautionary-measures"></div>
			<div className="signing-start"></div>
			<div className="signing-closing"></div>
		</div>
	);
};
