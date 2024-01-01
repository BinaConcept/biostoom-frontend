import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import {
	// 	Button,
	// 	Cascader,
	// Checkbox,
	// 	ColorPicker,
	DatePicker,
	Form,
	// Input,
	// Typography,
	// 	InputNumber,
	// 	Radio,
	Select,
	// 	Slider,
	// 	Switch,
	// 	TreeSelect,
	// 	Upload,
} from 'antd';
import { PermitBox } from '../../modules/permitBlox/PermitBox';
import ApiService from '../../service/ApiService';
import { useParams } from 'react-router-dom';

const discriptionOfActivityNL = {
	activity: [
		{ name: '', className: 'col-12 text-center' },

		[
			{
				key: 'disassemble_assemble',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Demontage/ montage',
				checked: false,
			},
			{
				key: 'welding',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Lassen',
				color: 'red',
				checked: false,
			},
			{
				key: 'cleaning',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Reinigen',
				checked: false,
			},
			{
				key: 'painting',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Verfwerken',
				checked: false,
			},
			{
				key: 'opening_of_installation',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Openleggen installatie',
				checked: false,
			},
			{
				key: 'flame_cutting',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Slijpen/ Branden',
				color: 'red',
				checked: false,
			},
			{
				key: 'insulation_works',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Isolatiewerken',
				checked: false,
			},
			{
				key: 'scafolding',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Stellingbouw',
				checked: false,
			},
			{
				key: 'inspection_activity',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Inspectiewerken',
				checked: false,
			},
			{
				key: 'brazing_soldering',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Solderen',
				color: 'red',
				checked: false,
			},
			{
				key: 'hoisting',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Hijswerken',
				checked: false,
			},
			{
				key: 'high_presure_works',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Hoge druk',
				checked: false,
			},
			{
				key: 'maintenance_activity',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Onderhoudswerken',
				checked: false,
			},
			{
				key: 'open_flame',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Open vlam',
				color: 'red',
				checked: false,
			},
			{
				key: 'digging',
				className: 'col-xl-3 col-lg-6 col-12',
				label: 'Graafwerken',
				checked: false,
			},
		],
	],
	description: [
		{ key: 'description', label: 'Korte omschrijving van de activiteit' },
	],
};

const riskAssessmentNL = {
	RiskOfEnergy: [
		{ name: 'Risico Energie', className: 'col-6' },
		[
			{
				key: 'contact_with_moving_parts',
				className: 'col-xl-6 col-12',
				label: 'Contact met bewegende delen',
				checked: false,
			},
			{
				key: 'contact_with_heat_steam',
				className: 'col-xl-6 col-12',
				label: 'Contact met hitte/ stoom',
				checked: false,
			},
			{
				key: 'contact_with_electricity',
				className: 'col-xl-6 col-12',
				label: 'Contact met elektriciteit',
				checked: false,
			},
			{
				key: 'contact_with_chemicals',
				className: 'col-xl-6 col-12',
				label: 'Contact met chemicalïen',
				checked: false,
			},
			{
				key: 'inside_elek_cabinet_LV',
				className: 'col-xl-6 col-12',
				label: 'In elektrische kast/ MCC',
				checked: false,
			},
			{
				key: 'contact_with_gasses',
				className: 'col-xl-6 col-12',
				label: 'Contact met gassen',
				checked: false,
			},
			{
				key: 'medium_high_voltage',
				className: 'col-xl-6 col-12',
				label: 'Middenspanning/ Hoogspanning',
				checked: false,
			},
			{
				key: 'contact_enery',
				className: 'col-xl-6 col-12',
				label: 'Restenergie',
				checked: false,
			},
			{
				key: 'contact_with_compresses_air',
				className: 'col-xl-6 col-12',
				label: 'Contact met perslucht',
				checked: false,
			},
			{
				key: 'working_with_power_switch_ON',
				className: 'col-xl-6 col-12',
				label: 'Werken onder energie',
				color: 'red',
				checked: false,
			},
		],
	],
	RiskWorkingHeight: [
		{ name: 'Risico werken op hoogte (>2m voethoogte)', className: 'col-6' },
		[
			{
				key: 'working_on_crane',
				className: 'col-xl-6 col-12',
				label: 'Werken op de kraan',
				checked: false,
			},
			{
				key: 'use_ladder_near_handrail',
				className: 'col-xl-6 col-12',
				label: 'Op ladder op <2m van leuning',
				checked: false,
			},
			{
				key: 'use_of_ladder',
				className: 'col-xl-6 col-12',
				label: 'Ladder',
				checked: false,
			},
			{
				key: 'working_on_roof',
				className: 'col-xl-6 col-12',
				label: 'Werken op daken',
				checked: false,
			},
			{
				key: 'use_of_soldering',
				className: 'col-xl-6 col-12',
				label: 'Stelling',
				checked: false,
			},
			{
				key: 'opening_pits_floors',
				className: 'col-xl-6 col-12',
				label: 'Openleggen putten/ vloeren',
				checked: false,
			},
			{
				key: 'use_of_mobile_platform_manual',
				className: 'col-xl-6 col-12',
				label: 'Mobiel platform',
				checked: false,
			},
			{
				key: 'making_of_holes_openings',
				className: 'col-xl-6 col-12',
				label: 'Maken van gaten/ openingen',
				checked: false,
			},
			{
				key: 'use_of_mobile_platform_powered',
				className: 'col-xl-6 col-12',
				label: 'Hoogtewerker',
				checked: false,
			},
			{
				key: 'use_of_fixed_ankerline_safe_line',
				className: 'col-xl-6 col-12',
				label: 'Vast ankerpunten of leeflijn',
				checked: false,
			},
		],
	],
	RiskOfAreaSurroundingst: [
		{ name: 'Risico omgeving', className: 'col-6' },
		[
			{
				key: 'confined_space',
				className: 'col-xl-6 col-12',
				label: 'Besloten ruimte',
				checked: false,
			},
			{
				key: 'atex_zone',
				className: 'col-xl-6 col-12',
				label: 'ATEX zone',
				color: 'red',
				checked: false,
			},
			{
				key: 'difficult_access',
				className: 'col-xl-6 col-12',
				label: 'Moeilijke',
				checked: false,
			},
			{
				key: 'hoisting_activities',
				className: 'col-xl-6 col-12',
				label: 'Hijswerken',
				checked: false,
			},
			{ key: 'traffic', className: 'col-6', label: 'Verkeer', checked: false },
			{
				key: 'dust_dirt_low_visibiloity',
				className: 'col-xl-6 col-12',
				label: 'Stof/ vuil/ weining verlichting',
				checked: false,
			},
			{ key: 'noise', className: 'col-6', label: 'Lawaai', checked: false },

			{
				key: 'insufficient_ventilation',
				className: 'col-xl-6 col-12',
				label: 'Onvoldoende ventilatie',
				checked: false,
			},
		],
	],

	UseOfEquipmentMaterials: [
		{ name: 'Gebruikte middelen en materialen', className: 'col-6' },
		[
			{
				key: 'handtools',
				className: 'col-xl-6 col-12',
				label: 'Handgereedschap',
				checked: false,
			},
			{
				key: 'crane_excavator',
				className: 'col-xl-6 col-12',
				label: 'Kraan/ graafmachine',
				checked: false,
			},
			{
				key: 'measuring_tools',
				className: 'col-xl-6 col-12',
				label: 'Meetapparatuur',
				checked: false,
			},
			{
				key: 'truck_vacuum_truck',
				className: 'col-xl-6 col-12',
				label: 'Vrachtwagen/ Zuigwagen',
				checked: false,
			},
			{
				key: 'electrical_tools',
				className: 'col-xl-6 col-12',
				label: 'Elektrisch gereedschap',
				checked: false,
			},
			{
				key: 'forklift_other',
				className: 'col-xl-6 col-12',
				label: 'Vorklift/ verreiker',
				checked: false,
			},
		],
	],
	description: [
		{
			key: 'description',
			label: "Extra info/ andere activiteitsgrelateerde risico's",
			checked: false,
		},
	],
};

const precautionaryMeasuresNL = {
	collectiveProtectionMeasures: [
		{ name: 'Collectieve bescherming', className: 'col-6' },
		[
			{
				key: 'lotto',
				className: 'col-6 col-12',
				label: 'Loto',
				checked: false,
			},
			{
				key: 'manhole_guard',
				className: 'col-xl-6 col-12',
				label: 'Mangatwacht',
				checked: false,
			},
			{
				key: 'lotto_fishe_nr',
				className: 'col-xl-6 col-12',
				label: 'Loto fiche nr.',
				checked: false,
			},
			{ key: 'earthing', className: 'col-6', label: 'Aarding', checked: false },
			{
				key: 'demarcate_area',
				className: 'col-xl-6 col-12',
				label: 'Afbakenen omgeving / signalisatie',
				checked: false,
			},
			{
				key: 'ventilation_oxygen_measurement',
				className: 'col-xl-6 col-12',
				label: 'Ventilatie/ gasmeting',
				checked: false,
			},
			{
				key: 'release_form_confined_space',
				className: 'col-xl-6 col-12',
				label: 'Vrijgave formulier besloten ruimte',
				checked: false,
			},
			{
				key: 'extra_lightning',
				className: 'col-xl-6 col-12',
				label: 'Extra verlichting',
				checked: false,
			},
			{
				key: 'two_person_present',
				className: 'col-xl-6 col-12',
				label: '2de persoon aanwezig',
				checked: false,
			},

			{
				key: 'remove_contained_energy',
				className: 'col-xl-6 col-12',
				label: 'Restenergie verwijderen',
				checked: false,
			},
		],
	],

	personalProtectionMeasures: [
		{ name: 'Persoonlijke bescherming', className: 'col-6' },
		[
			{
				key: 'safety_shoes',
				className: 'col-xl-6 col-12',
				label: 'Veiligheidsschoenen',
				checked: true,
			},
			{
				key: 'gloves',
				className: 'col-xl-6 col-12',
				label: 'Handschoenen (juiste type)',
				checked: false,
			},
			{ key: 'helmet', className: 'col-6', label: 'Helm', checked: true },
			{
				key: 'ear_protection',
				className: 'col-xl-6 col-12',
				label: 'Gehoorbescherming',
				checked: false,
			},
			{
				key: 'fluo_jacket',
				className: 'col-xl-6 col-12',
				label: 'Fluo-hesje (buiten altijd verlicht)',
				checked: false,
			},
			{
				key: 'safety_harnas',
				className: 'col-xl-6 col-12',
				label: 'Valbescherming',
				checked: false,
			},
			{
				key: 'eye_protection_for_chemicals',
				className: 'col-xl-6 col-12',
				label: 'Bril/ Chemicaliënbril',
				checked: false,
			},
			{
				key: 'respiratory_protection',
				className: 'col-xl-6 col-12',
				label: 'Ademhalingsbescherming',
				checked: false,
			},
			{
				key: 'face_protection',
				className: 'col-xl-6 col-12',
				label: 'Gelaatmasker',
				checked: false,
			},
			{
				key: 'protective_clothing',
				className: 'col-xl-6 col-12',
				label: 'Beschermende kledij(vb. tyvek)',
				checked: false,
			},
		],
	],
	capabilitySkills: [
		{ name: 'Geschiktheid/ bekwaamheid', className: 'col-6' },
		[
			{
				key: 'valid_licensies_certificates',
				className: 'col-xl-6 col-12',
				label: 'Geldige brevetten/ attesten',
				checked: false,
			},
			{
				key: 'valid_certificates_of_equipment',
				className: 'col-xl-6 col-12',
				label: 'Geldige keuringen gereedschappen',
				checked: false,
			},
		],
	],
	firePermitsNecessary: [
		{ name: 'Controle vuurvergunning nodig', className: 'col-6' },
		[
			{
				key: 'always_fire_permit',
				className: 'col-12',
				label:
					'Activiteiten waarbij hitte vrijkomt of activiteit in een ATEX-zone = ALTIJD VUURVERGUNNING',
				color: 'red',
				checked: false,
			},
		],
	],
	description: [
		{
			key: 'description',
			label: 'Extra info/ andere te nemen beheersmaatregelen',
		},
	],
};

// console.log(discriptionOfActivityNL);
// console.log(riskAssessmentNL);
// console.log(precautionaryMeasuresNL);

export const WorkpermitForm = () => {
	const { id } = useParams();
	const [startDate, setStartDate] = useState(null);
	const [stopDate, setStopDate] = useState(null);
	const [error, setError] = useState(null);
	const [location, setLocation] = useState();
	const [listLocation, setListLocation] = useState();
	const [selectLocation, setSelectLocation] = useState();
	const [permit,setPermit]= useState([])

	useEffect(() => {
		// Define the function to fetch location data
		const fetchLocation = async () => {
			try {
				const locationResponse = await ApiService.get('location');
				setLocation(locationResponse);

				const workResponse = await ApiService.get('workpermit');
				setPermit(workResponse);


				// if (id !== undefined) {
				// 	const response = await ApiService.getID(id, 'lotto');
				// 	setLottoID(response);
				// }
			} catch (error) {
				console.error('Error fetching location:', error);
				setError(error.message);
			}
		};

		// Call the fetchLocation function when the component mounts
		fetchLocation();
	}, [id]);
	if (error && id !== undefined) {
		return <div>Error: {error}</div>;
	}

	// if (!lottoID && id !== undefined) {
	// 	return <div>Loading...</div>;
	// }

	const disabledStopDate = (current, startDate) => {
		if (!startDate) {
			// If no start date is provided, disable all dates
			return true;
		}

		const startDay = dayjs(startDate).startOf('day');
		const eightDaysAfter = dayjs(startDay).add(8, 'days');

		return current && (current < startDay || current > eightDaysAfter);
	};

	const disabledStartDate = (current) => {
		// Can not select days before today and today
		return current && current < dayjs().startOf('day');
	};

	const handleStartDateChange = (date, dateString) => {
		setStartDate(date);

		// If the start date is cleared, clear the stop date as well
		if (!date) {
			setStopDate(null);
		}
	};

	const handleStopDateChange = (date, dateString) => {
		setStopDate(date);
	};
	const handleChange = (value) => {
		setSelectLocation({ name: value });
	};
	return (
		<div className="container p-3">
			<div className="row m-1 mb-4">
				<div className="col-xl-2 col-lg-2">
					<label className="m-1">Start datum</label>
					<br />
					<DatePicker
						format="DD-MM-YYYY"
						disabledDate={disabledStartDate}
						onChange={handleStartDateChange}
					/>
				</div>
				<div className="col-xl-2 col-lg-2">
					<label className="m-1">Stop datum</label>
					<br />
					<DatePicker
						format="YYYY-MM-DD"
						disabled={!startDate}
						disabledDate={(current) => disabledStopDate(current, startDate)}
						onChange={handleStopDateChange}
						value={stopDate}
					/>
				</div>

				<div className="col-xl-2 col-lg-2">
					<Form.Item>
						<label className="m-1">Location</label>
						<br />
						<Select
							onChange={handleChange}
							style={{ width: '100%' }}
							// defaultValue={id > 0 ? lottoID.name : null}
							options={
								location
									? location.map((item) => ({
											label: item.name,
											value: item.id,
									  }))
									: null
							}
						/>
					</Form.Item>
				</div>
				<div className="col-xl-2 col-lg-2">
					<Form.Item>
						<label className="m-1">Company</label>
						<br />
						<Select
							onChange={handleChange}
							style={{ width: '100%' }}
							// defaultValue={id > 0 ? lottoID.name : null}
							options={
								location
									? location.map((item) => ({
											label: item.name,
											value: item.id,
									  }))
									: null
							}
						/>
					</Form.Item>
				</div>
				<div className="col-xl-2 col-lg-2">
					<Form.Item>
						<label className="m-1">Ext. employee</label>
						<br />
						<Select
							onChange={handleChange}
							style={{ width: '100%' }}
							// defaultValue={id > 0 ? lottoID.name : null}
							options={
								location
									? location.map((item) => ({
											label: item.name,
											value: item.id,
									  }))
									: null
							}
						/>
					</Form.Item>
				</div>
			</div>
			<div className="description-of-activity">
				<PermitBox
					data={discriptionOfActivityNL}
					title={'Activiteiten'}
					color={'gray'}
				></PermitBox>
			</div>
			<div className="risk-assessment">
				<PermitBox
					data={riskAssessmentNL}
					title={"Analyse van de risico's"}
					color={'green'}
				></PermitBox>
			</div>
			<div className="precautionary-measures">
				<PermitBox
					data={precautionaryMeasuresNL}
					title={'Beheersmaatregelen'}
					color={'orange'}
				></PermitBox>
			</div>
			<div className="signing-start"></div>
			<div className="signing-closing"></div>
		</div>
	);
};
