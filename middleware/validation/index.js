const { authValidation } = require('./auth');
const { companyValidation, updateCompanyValidation } = require('./company');
const {
	educationValidation,
	updateEducationValidation
} = require('./education');

const {
	experienceValidation,
	updateExperienceValidation
} = require('./experience');

const { jobValidation, updateJobValidation } = require('./job');
const {
	jobSkillsValidation,
	updateJobSkillsValidation
} = require('./jobSkills');

const { seekerValidation, updateSeekerValidation } = require('./seeker');

const { skillsValidation, updateSkillsValidation } = require('./skills');

module.exports = {
	authValidation,
	companyValidation,
	updateCompanyValidation,
	educationValidation,
	updateEducationValidation,
	experienceValidation,
	updateExperienceValidation,
	jobValidation,
	updateJobValidation,
	jobSkillsValidation,
	updateJobSkillsValidation,
	seekerValidation,
	updateSeekerValidation,
	skillsValidation,
	updateSkillsValidation
};
