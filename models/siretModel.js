const { Pool } = require('pg');
require('dotenv').config();

//? Create a new pool (we will use environement variables to store the database credentials)
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

//? We verify connection (mostly to verify that we were connected when working with Ngrok)
pool.connect((err, client, done) => {
    if (err) {
        console.error('Error connecting to the database', err.stack);
    } else {
        console.log('Connected to the database');
    }
    done();
  });

/**
 * Retrieves rows from the database based on the provided siret.
 *
 * @param {number} siret - The siret to query the database with.
 * @return {Array} An array of rows matching the provided siret.
 */
async function getSiret(siret) {
    const { rows } = await pool.query('SELECT * FROM dataset_first_version WHERE siret = $1', [siret]);
    return rows;
}

/**
 * Deletes a record from the dataset_first_version table based on the given siret.
 *
 * @param {string} siret - The siret of the record to be deleted.
 * @return {Object} The deleted record.
 */
async function deleteSiret(siret) {
    const result = await pool.query('DELETE FROM dataset_first_version WHERE siret = $1 RETURNING *', [siret]);
    return result;
}

/**
 * Adds a record to the table.
 * 
 * @param {number} siren - The siren of the record to be added.
 * @param {number} nic - The nic of the record to be added.
 * @param {number} siret - The siret of the record to be added.
 * and etc ....
 * @return {Object} The added record.
 * 
 */
async function addRow(siren, nic, siret, enseigne1Etablissement, statutDiffusionEtablissement, dateCreationEtablissement, trancheEffectifsEtablissement, anneeEffectifsEtablissement, activitePrincipaleRegistreMetiersEtablissement, dateDernierTraitementEtablissement, etablissementSiege, nombrePeriodesEtablissement, complementAdresseEtablissement, numeroVoieEtablissement, indiceRepetitionEtablissement, typeVoieEtablissement, libelleVoieEtablissement, codePostalEtablissement, libelleCommuneEtablissement, libelleCommuneEtrangerEtablissement, distributionSpecialeEtablissement, codeCommuneEtablissement, codeCedexEtablissement, libelleCedexEtablissement, codePaysEtrangerEtablissement, libellePaysEtrangerEtablissement, complementAdresse2Etablissement, numeroVoie2Etablissement, indiceRepetition2Etablissement, typeVoie2Etablissement, libelleVoie2Etablissement, codePostal2Etablissement, libelleCommune2Etablissement, libelleCommuneEtranger2Etablissement, distributionSpeciale2Etablissement, codeCommune2Etablissement, codeCedex2Etablissement, libelleCedex2Etablissement, codePaysEtranger2Etablissement, libellePaysEtranger2Etablissement, dateDebut, etatAdministratifEtablissement, enseigne2Etablissement, enseigne3Etablissement, denominationUsuelleEtablissement, activitePrincipaleEtablissement, nomenclatureActivitePrincipaleEtablissement, caractereEmployeurEtablissement) {
    const result = await pool.query(
        'INSERT INTO dataset_first_version (siren, nic, siret, statutdiffusionetablissement, datecreationetablissement, trancheeffectifsetablissement, anneeeffectifsetablissement, activiteprincipaleregistremetiersetablissement, datederniertraitementetablissement, etablissementsiege, nombreperiodesetablissement, complementadresseetablissement, numerovoieetablissement, indicerepetitionetablissement, typevoieetablissement, libellevoieetablissement, codepostaletablissement, libellecommuneetablissement, libellecommuneetrangeretablissement, distributionspecialeetablissement, codecommuneetablissement, codecedexetablissement, libellecedexetablissement, codepaysetrangeretablissement, libellepaysetrangeretablissement, complementadresse2etablissement, numerovoie2etablissement, indicerepetition2etablissement, typevoie2etablissement, libellevoie2etablissement, codepostal2etablissement, libellecommune2etablissement, libellecommuneetranger2etablissement, distributionspeciale2etablissement, codecommune2etablissement, codecedex2etablissement, libellecedex2etablissement, codepaysetranger2etablissement, libellepaysetranger2etablissement, datedebut, etatadministratifetablissement, enseigne1etablissement, enseigne2etablissement, enseigne3etablissement, denominationusuelleetablissement, activiteprincipaleetablissement, nomenclatureactiviteprincipaleetablissement, caractereemployeuretablissement) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48)',
        [siren, nic, siret, enseigne1Etablissement, statutDiffusionEtablissement, dateCreationEtablissement, trancheEffectifsEtablissement, anneeEffectifsEtablissement, activitePrincipaleRegistreMetiersEtablissement, dateDernierTraitementEtablissement, etablissementSiege, nombrePeriodesEtablissement, complementAdresseEtablissement, numeroVoieEtablissement, indiceRepetitionEtablissement, typeVoieEtablissement, libelleVoieEtablissement, codePostalEtablissement, libelleCommuneEtablissement, libelleCommuneEtrangerEtablissement, distributionSpecialeEtablissement, codeCommuneEtablissement, codeCedexEtablissement, libelleCedexEtablissement, codePaysEtrangerEtablissement, libellePaysEtrangerEtablissement, complementAdresse2Etablissement, numeroVoie2Etablissement, indiceRepetition2Etablissement, typeVoie2Etablissement, libelleVoie2Etablissement, codePostal2Etablissement, libelleCommune2Etablissement, libelleCommuneEtranger2Etablissement, distributionSpeciale2Etablissement, codeCommune2Etablissement, codeCedex2Etablissement, libelleCedex2Etablissement, codePaysEtranger2Etablissement, libellePaysEtranger2Etablissement, dateDebut, etatAdministratifEtablissement, enseigne2Etablissement, enseigne3Etablissement, denominationUsuelleEtablissement, activitePrincipaleEtablissement, nomenclatureActivitePrincipaleEtablissement, caractereEmployeurEtablissement]
    );
    return result;
}

module.exports = {
    getSiret,
    deleteSiret,
    addRow
};
