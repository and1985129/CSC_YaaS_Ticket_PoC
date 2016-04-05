sap.ui.define([], function () {
        "use strict";

        return {
            /**
             * Rounds the currency value to 2 digits
             *
             * @public
             * @param {string} sValue value to be formatted
             * @returns {string} formatted currency value with 2 digits
             */
            currencyValue: function (sValue) {
                if (!sValue) {
                    return "";
                }

                return parseFloat(sValue).toFixed(2);
            },
            status: function (sStatus) {
                if (sStatus === "In Process" || sStatus === "Completed")  {
                    return "Success";
                } else if (sStatus === "Open") {
                    return "Warning";
                } else if (sStatus === "Error") {
                    return "Error";
                } else {
                    return "None";
                }
            },
            priority: function (sStatus) {
                if (sStatus === "Low" || sStatus === "Normal")  {
                    return "Success";
                } else if (sStatus === "Urgent") {
                    return "Warning";
                } else if (sStatus === "Immediate") {
                    return "Error";
                } else {
                    return "None";
                }
            },
            date : function (value) {
                if (value) {
                    var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({pattern: "yyyy-MM-dd"});
                    return oDateFormat.format(new Date(value));
                } else {
                    return value;
                }
            },
        };

    }
);
