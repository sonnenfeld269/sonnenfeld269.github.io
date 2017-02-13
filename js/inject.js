"use strict";

/**
* function : inject
*   the function takes an html string and injects content from json into it by
*   looping through the data and storing the results in an array
*
* Parameters
*   htmlString : string - an html string like a modal or div
*
* Return
*   resultArray.join : string - returns a string, which was converted from an
*                               array
*/
function inject(htmlString) {

    var resultArray = [];
    var resultString = "";

    // sort projects by year
    projects.sort(function (a, b) {
        return b.year - a.year;
    });

    for (index in projects) {

        if (htmlString.includes("%id%")) {
            resultString = htmlString.replace("%id%", projects[index].id);
        }
        if (htmlString.includes("%title%")) {
            resultString = resultString.replace("%title%", projects[index].title);
        }
        if (htmlString.includes("%subtitle%")) {
            resultString = resultString.replace("%subtitle%", projects[index].subtitle);
        }
        if (htmlString.includes("%year%")) {
            resultString = resultString.replace("%year%", projects[index].year);
        }
        if (htmlString.includes("%image%")) {
            if (projects[index].image) {
                resultString = resultString.replace("%image%", projects[index].image);
            } else {
                resultString = resultString.replace("%image%", "placeholder.png");
            }
        }
        if (htmlString.includes("%position%")) {
            resultString = resultString.replace("%position%", projects[index].position);
        }
        if (htmlString.includes("%technologies%")) {
            techString = "";
            for (tech in projects[index].technologies) {
                techString += "<span class=\"label tech-label label-info\">" + projects[index].technologies[tech] + "</span> ";
            }
            resultString = resultString.replace("%technologies%", techString);
        }
        if (htmlString.includes("%description%")) {
            resultString = resultString.replace("%description%", projects[index].description);
        }
        if (htmlString.includes("%link%")) {
            if (projects[index].link) {
                resultString = resultString.replace("%link%", projects[index].link);
                resultString = resultString.replace("%linkText%", "Link to project");
            } else {
                resultString = resultString.replace("%link%", "javascript: void(0)");
                resultString = resultString.replace("%linkText%", "No link available");
            }
        }
        if (htmlString.includes("%icon%")) {
            if (projects[index].link.includes("github")) {
                resultString = resultString.replace("%icon%", "github");
            } else {
                resultString = resultString.replace("%icon%", "desktop");
            }
        }
        resultArray.push(resultString);
    }
    return resultArray.join("\n");
}

// TODO insert a caption over the image

var project = "<div class=\"project-tile col-xs-12 col-sm-4 col-lg-3\" data-toggle=\"modal\"\n               data-target=\"#project%id%\">\n                  <img class=\"img-responsive\" src=\"./images/projects/%image%\">\n                  <h3>%title% (%year%)</h3>\n                  <p>\n                    <a target=\"_blank\" href=\"%link%\"><i class=\"fa fa-%icon%\"\n                  aria-hidden=\"true\"></i> %linkText%</a>\n                  </p>\n                </div>";

var modal = "<div class=\"modal fade\" id=\"project%id%\" tabindex=\"-1\"\n             role=\"dialog\" aria-labelledby=\"myModalLabel\">\n             <div class=\"container\">\n             <div class=\"modal-dialog\" role=\"document\">\n             <div class=\"modal-content\">\n             <div class=\"modal-header\">\n                <button type=\"button\" class=\"close custom-close\"\n                data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h2 class=\"modal-title title\" id=\"myModalLabel\">%title%\n                (%year%)</h2>\n                <h3 class=\"subtitle\">%subtitle%</h3>\n             </div>\n             <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-xs-12\">\n                      <img class=\"img-responsive\" src=\"./images/projects/%image%\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xs-12 vbottom\">\n                    <span class=\"label tech-label label-warning\">%position%</span>\n                    %technologies%\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-xs-12\">\n                    <p>%description%</p>\n                  </div>\n                </div>\n             </div>\n             <div class=\"modal-footer\">\n                <div class=\"pull-left\">\n                  <a target=\"_blank\" href=\"%link%\">\n                    <i class=\"fa fa-%icon%\" aria-hidden=\"true\"></i>\n                    %linkText%\n                  </a>\n                </div>\n                <button type=\"button\" class=\"btn btn-modal btn-md\" data-dismiss=\"modal\">Close</button>\n              </div>\n            </div>\n        </div>\n    </div>\n</div>";

/**
* the html tag will be selected and the formatted content will be appended to them.
*/
$(document).ready(function () {
    $(".projectview").append(inject(project));
    $(".modalview").append(inject(modal));
});
