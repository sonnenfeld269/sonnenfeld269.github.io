/*
  This is our inject file. It parses through our data, which is stored in data.js
  and injects the data into the html strings.
*/

function inject(htmlString) {

    var resultArray = [];
    var resultString = "";

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
            resultString = resultString.replace("%image%", projects[index].image);
        }
        if (htmlString.includes("%position%")) {
            resultString = resultString.replace("%position%", projects[index].position);
        }
        if (htmlString.includes("%technologies%")) {
            resultString = resultString.replace("%technologies%", projects[index].technologies.join(", "));
        }
        if (htmlString.includes("%description%")) {
            resultString = resultString.replace("%description%", projects[index].description);
        }
        if (htmlString.includes("%link%")) {
            resultString = resultString.replace("%link%", projects[index].link);
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

var project = `<div class="project-tile col-xs-12 col-sm-4">
    <img class="glow-img img-responsive" src="./images/projects/%image%" data-toggle="modal" data-target="#project%id%">
    <h3>%title% (%year%)</h3>
    <p><a href="%link%"><i class="fa fa-%icon%" aria-hidden="true"></i> Link to project</a></p>
</div>`;

var modal = `<div class="modal fade" id="project%id%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="container">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close custom-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title title" id="myModalLabel">%title% (%year%)</h2>
                    <h3 class="subtitle">%subtitle%</h3>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-xs-12">
                            <img class="img-responsive" src="./images/projects/%image%">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <h3>%position%, Technologies: %technologies% </h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <p>%description%</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-modal" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>`;

$(document).ready(function() {
    $(".projectview").append(inject(project));
    $(".modalview").append(inject(modal));
});
