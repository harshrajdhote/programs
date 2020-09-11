class DOMHelper{
    static moveElement(elementId,newDestinationSelector){
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}
class Tooltip{}
class ProjectItem {
    constructor(id,updateProjectListsFunction){
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }
    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click',this.updateProjectListsHandler.bind(null,this.id))
    }
    connectMoreInfoButton(){
        
    }

}
class ProjectList {
    projects = [];
    constructor(type){
        this.type  = type;
        // this.switchHandler = switchHandlerFunction;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id,this.switchProject.bind(this))); // id is property of item
        }
    }
    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }
    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id,`#${this.type}-projects ul`);

    }
    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}
class App {
    static init(){
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(
            finishedProjectsList.addProject.bind(finishedProjectsList)
        );
        finishedProjectsList.setSwitchHandlerFunction(
            activeProjectsList.addProject.bind(activeProjectsList)
        );

    }

}

App.init();