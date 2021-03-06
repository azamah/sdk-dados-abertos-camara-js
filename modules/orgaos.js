import { get } from './api';
import { validateFormat } from './utils';

const defaultOptions = {
  pagina: 1,
  ordem: 'ASC',
  format: 'json',
};

/**
 * Wraps the /orgaos endpoint
 *
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */

export const getOrgaos = async (
  options = {
    ...defaultOptions,
    ordenarPor: 'sigla',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'id',
    'sigla',
    'nome',
    'apelido',
    'codTipoOrgao',
    'tipoOrgao',
    'dataInicio',
    'dataFim',
  ];
  const availableOptions = [
    'id',
    'sigla',
    'codTipoOrgao',
    'dataInicio',
    'dataFim',
  ];

  const res = await get(
    'orgaos',
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps orgao/{id} endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {String} format - Desired response format, default is json.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgao = async (id, format = 'json', fullResponse = false) => {
  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  if (!validateFormat(format)) {
    throw new Error('Invalid format!');
  }

  const res = await get(`orgaos/${id}`, { format });

  return fullResponse ? res : res.data;
};

/**
 * Wraps orgaos/{id}/eventos endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgaoEventos = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'dataHoraInicio',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'id',
    'dataHoraInicio',
    'idTipoEvento',
    'dataInicio',
    'dataFim',
  ];
  const availableOptions = ['id', 'idTipoEvento', 'dataInicio', 'dataFim'];

  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const res = await get(
    `orgaos/${id}/eventos`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps orgao/{id}/membros endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {String} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgaoMembros = async (
  id,
  options = {
    format: 'json',
  },
  fullResponse = false
) => {
  const availableOrderFields = ['dataInicio', 'dataFim'];
  const availableOptions = ['dataInicio', 'dataFim'];

  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const res = await get(
    `orgaos/${id}/membros`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

/**
 * Wraps orgaos/{id}/votacoes endpoint.
 *
 * @param {Integer} id - ID of the orgao that will be requested.
 * @param {Object} options - Options to be sent in the request.
 * @param {Boolean} fullResponse - If true it will retrieve the whole response object, otherwise it will return only the data object inside the response.
 */
export const getOrgaoVotacoes = async (
  id,
  options = {
    ...defaultOptions,
    ordenarPor: 'id',
  },
  fullResponse = false
) => {
  const availableOrderFields = [
    'id',
    'idOrgao',
    'siglaOrgao',
    'idEvento',
    'idProposicao',
    'data',
    'dataHoraRegistro',
    'idProposicaoObjeto',
  ];
  const availableOptions = ['dataInicio', 'dataFim'];

  if (!id) {
    throw new Error('Required parameter ID is not present!');
  }

  const res = await get(
    `orgaos/${id}/votacoes`,
    options,
    availableOrderFields,
    availableOptions
  );

  return fullResponse ? res : res.data;
};

export default {
  getOrgaos,
  getOrgao,
  getOrgaoEventos,
  getOrgaoMembros,
  getOrgaoVotacoes,
};
