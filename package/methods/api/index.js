const constant = require("../../contract/constants");

/**
 * @class Njs2Api
 * @extends basePkg
 * @method execute
 */
class Njs2Api extends basePkg {

  constructor() {
    super();
    this.LOGIN_TYPE = constant.USER_TYPE.APPLE;
  }

  /**
   * @function execute
   * @param {Object} initParams
   * @returns {Promise<{}>}
   */
  async execute(initParams, optionalParams = {}) {
    try {
      const { inpVals } = initParams ? initParams : {};
      return { code: 'SUCCESS', data: {} };
    } catch (e) {
      console.log(e);
      return { code: 'UNKNOWN_ERROR', data: {} };
    }
  };
}

module.exports = () => new Njs2Api();