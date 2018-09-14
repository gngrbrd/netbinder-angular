export class Topic{
  private _subSection:  string;
  private _description: string; 

  constructor(subSection:  string, description:  string){
    this._subSection = subSection;
    this._description = description;

  }
  

  public Section(){ return this._subSection;  }
  public Section( subSection:  string){ this._subSection = subSection;  }
  }

  export class TopicList extends Topic{

    private _section:  Array<any>;
    private _sectionHeader:  string;
    
    
    }

  export class Pages extends TopicList{

    private _page:  any;
    private _pageHeader:  string;

    }

