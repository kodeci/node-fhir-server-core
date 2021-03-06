module.exports = {
	ABSTRACT: {
		name: 'abstract',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-abstract',
		documentation: 'Whether the structure is abstract.',
	},
	BASE: {
		name: 'base',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-base',
		documentation: 'Definition that this type is constrained/specialized from.',
	},
	BASE_PATH: {
		name: 'base-path',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-base-path',
		documentation: 'Path that identifies the base element.',
	},
	CONTEXT_TYPE: {
		name: 'context-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-context-type',
		documentation: 'resource | datatype | extension.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-date',
		documentation: 'The structure definition publication date.',
	},
	DERIVATION: {
		name: 'derivation',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-derivation',
		documentation: 'specialization | constraint - How relates to base definition.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-description',
		documentation: 'The description of the structure definition.',
	},
	EXPERIMENTAL: {
		name: 'experimental',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-experimental',
		documentation: 'For testing purposes, not real usage.',
	},
	EXT_CONTEXT: {
		name: 'ext-context',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-ext-context',
		documentation: 'Where the extension can be used in instances.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-identifier',
		documentation: 'External identifier for the structure definition.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-jurisdiction',
		documentation: 'Intended jurisdiction for the structure definition.',
	},
	KEYWORD: {
		name: 'keyword',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-keyword',
		documentation: 'A code for the profile.',
	},
	KIND: {
		name: 'kind',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-kind',
		documentation: 'primitive-type | complex-type | resource | logical.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-name',
		documentation: 'Computationally friendly name of the structure definition.',
	},
	PATH: {
		name: 'path',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-path',
		documentation: 'A path that is constrained in the profile.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-publisher',
		documentation: 'Name of the publisher of the structure definition.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-status',
		documentation: 'The current status of the structure definition.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-title',
		documentation: 'The human-friendly name of the structure definition.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-type',
		documentation: 'Type defined or constrained by this structure.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-url',
		documentation: 'The uri that identifies the structure definition.',
	},
	VALUESET: {
		name: 'valueset',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-valueset',
		documentation: 'A vocabulary binding reference.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/StructureDefinition-version',
		documentation: 'The business version of the structure definition.',
	},
};
