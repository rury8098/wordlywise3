var test = [
    [1,"a","single",2,"a"],
    [1,"a","single",3,"b"],
    [1,"a","single",4,"c"],
    [1,"a","single",5,"d"],
    [1,"a","single",6,"a"],
    [1,"a","single",7,"d"],
    [1,"a","single",8,"c"],
    [1,"a","single",9,"b"],
    [1,"a","single",10,"c"],
    [1,"b","written",1,"scar"],
    [1,"b","written",2,"cylinder"],
    [1,"b","written",3,"marine"],
    [1,"b","written",4,"grasped"],
    [1,"b","written",5,"fatal"],
    [1,"c","single",1,"b"],
    [1,"c","single",2,"c"],
    [1,"c","single",3,"d"],
    [1,"c","single",4,"c"],
    [1,"c","single",5,"a"],
    [2,"a","ci",1,"icic"],
    [2,"a","ci",2,"iicc"],
    [2,"a","ci",3,"ccci"],
    [2,"a","ci",4,"iccc"],
    [2,"a","ci",5,"ccic"],
    [2,"a","ci",6,"cicc"],
    [2,"a","ci",7,"iicc"],
    [2,"a","ci",8,"ciic"],
    [2,"b","single",1,"a"],
    [2,"b","single",2,"a"],
    [2,"b","single",3,"b"],
    [2,"b","single",4,"c"],
    [2,"b","single",5,"a"],
    [2,"c","single",1,"d"],
    [2,"c","single",2,"b"],
    [2,"c","single",3,"a"],
    [2,"c","single",4,"c"],
    [2,"c","single",5,"b"],
    [2,"d","multiple",1,"bcd"],
    [2,"d","multiple",2,"bcd"],
    [2,"d","multiple",3,"abc"],
    [2,"d","multiple",4,"abc"],
    [2,"d","multiple",5,"abd"],
    [3,"a","single",1,"d"],
    [3,"a","single",2,"c"],
    [3,"a","single",3,"a"],
    [3,"a","single",4,"b"],
    [3,"a","single",5,"c"],
    [3,"a","single",6,"a"],
    [3,"a","single",7,"c"],
    [3,"a","single",8,"b"],
    [3,"a","single",9,"d"],
    [3,"a","single",10,"c"],
    [3,"b","written",1,"coast"],
    [3,"b","written",2,"starve"],
    [3,"b","written",3,"volunteers"],
    [3,"b","written",4,"ambition"],
    [3,"b","written",5,"current"],
    [3,"c","single",1,"c"],
    [3,"c","single",2,"b"],
    [3,"c","single",3,"d"],
    [3,"c","single",4,"a"],
    [3,"c","single",5,"d"],
    [4,"a","ci",1,"ciic"],
    [4,"a","ci",2,"cicc"],
    [4,"a","ci",3,"ccii"],
    [4,"a","ci",4,"ccic"],
    [4,"a","ci",5,"ccii"],
    [4,"a","ci",6,"ccci"],
    [4,"a","ci",7,"ccic"],
    [4,"a","ci",8,"icic"],
    [4,"b","single",1,"c"],
    [4,"b","single",2,"d"],
    [4,"b","single",3,"a"],
    [4,"b","single",4,"b"],
    [4,"b","single",5,"b"],
    [4,"b","single",6,"d"],
    [4,"b","single",7,"a"],
    [4,"b","single",8,"b"],
    [4,"c","single",1,"b"],
    [4,"c","single",2,"d"],
    [4,"c","single",3,"d"],
    [4,"c","single",4,"c"],
    [4,"c","single",5,"a"],
    [4,"c","single",6,"c"],
    [4,"c","single",7,"d"],
    [4,"d","multiple",1,"abc"],
    [4,"d","multiple",2,"bcd"],
    [4,"d","multiple",3,"abd"],
    [4,"d","multiple",4,"abd"],
    [4,"d","multiple",5,"bcd"],
    [5,"a","single",1,"d"],
    [5,"a","single",2,"a"],
    [5,"a","single",3,"c"],
    [5,"a","single",4,"b"],
    [5,"a","single",5,"c"],
    [5,"a","single",6,"b"],
    [5,"a","single",7,"a"],
    [5,"a","single",8,"c"],
    [5,"b","written",1,"limits"],
    [5,"b","written",2,"league"],
    [5,"b","written",3,"Arctic"],
    [5,"b","written",4,"milestone"],
    [5,"b","written",5,"tackle"],
    [5,"b","written",6,"court"],
    [5,"b","written",7,"elect"],
    [5,"b","written",8,"interval"],
    [5,"c","single",1,"a"],
    [5,"c","single",2,"b"],
    [5,"c","single",3,"d"],
    [5,"c","single",4,"c"],
    [5,"c","single",5,"b"],
    [5,"c","single",6,"a"],
    [5,"c","single",7,"c"],
    [5,"c","single",8,"d"],
    [6,"a","ci",1,"ccic"],
    [6,"a","ci",2,"iccc"],
    [6,"a","ci",3,"ccci"],
    [6,"a","ci",4,"ccci"],
    [6,"a","ci",5,"ccci"],
    [6,"a","ci",6,"cicc"],
    [6,"a","ci",7,"ccii"],
    [6,"a","ci",8,"ccii"],
    [6,"b","single",1,"d"],
    [6,"b","single",2,"b"],
    [6,"b","single",3,"c"],
    [6,"b","single",4,"d"],
    [6,"b","single",5,"b"],
    [6,"b","single",6,"d"],
    [6,"b","single",7,"c"],
    [6,"b","single",8,"d"],
    [6,"c","single",1,"c"],
    [6,"c","single",2,"d"],
    [6,"c","single",3,"a"],
    [6,"c","single",4,"b"],
    [6,"c","single",5,"a"],
    [6,"c","single",6,"c"],
    [6,"c","single",7,"a"],
    [6,"d","multiple",1,"abc"],
    [6,"d","multiple",2,"abc"],
    [6,"d","multiple",3,"abd"],
    [6,"d","multiple",4,"bcd"],
    [6,"d","multiple",5,"bcd"],
    [7,"a","single",1,"a"],
    [7,"a","single",2,"d"],
    [7,"a","single",3,"c"],
    [7,"a","single",4,"b"],
    [7,"a","single",5,"c"],
    [7,"a","single",6,"b"],
    [7,"a","single",7,"d"],
    [7,"a","single",8,"a"],
    [7,"b","written",1,"acted"],
    [7,"b","written",2,"transparent"],
    [7,"b","written",3,"mystified"],
    [7,"b","written",4,"fanned"],
    [7,"b","written",5,"vanished"],
    [7,"b","written",6,"additional"],
    [7,"b","written",7,"paused"],
    [7,"b","written",8,"crumpled"],
    [7,"c","single",1,"b"],
    [7,"c","single",2,"c"],
    [7,"c","single",3,"a"],
    [7,"c","single",4,"c"],
    [7,"c","single",5,"b"],
    [7,"c","single",6,"c"],
    [7,"c","single",7,"d"],
    [8,"a","ci",1,"ciic"],
    [8,"a","ci",2,"icci"],
    [8,"a","ci",3,"iicc"],
    [8,"a","ci",4,"ccic"],
    [8,"a","ci",5,"ccci"],
    [8,"a","ci",6,"iicc"],
    [8,"a","ci",7,"cici"],
    [8,"a","ci",8,"ccic"],
    [8,"b","single",1,"b"],
    [8,"b","single",2,"d"],
    [8,"b","single",3,"d"],
    [8,"b","single",4,"c"],
    [8,"b","single",5,"d"],
    [8,"b","single",6,"a"],
    [8,"b","single",7,"b"],
    [8,"b","single",8,"b"],
    [8,"c","single",1,"d"],
    [8,"c","single",2,"b"],
    [8,"c","single",3,"b"],
    [8,"c","single",4,"c"],
    [8,"c","single",5,"b"],
    [8,"c","single",6,"d"],
    [8,"c","single",7,"b"],
    [8,"d","multiple",1,"bcd"],
    [8,"d","multiple",2,"abd"],
    [8,"d","multiple",3,"acd"],
    [8,"d","multiple",4,"bcd"],
    [8,"d","multiple",5,"abc"],
    [9,"a","single",1,"d"],
    [9,"a","single",2,"c"],
    [9,"a","single",3,"d"],
    [9,"a","single",4,"b"],
    [9,"a","single",5,"d"],
    [9,"a","single",6,"a"],
    [9,"a","single",7,"c"],
    [9,"a","single",8,"b"],
    [9,"b","written",1,"individual"],
    [9,"b","written",2,"defend"],
    [9,"b","written",3,"survey"],
    [9,"b","written",4,"miserable"],
    [9,"b","written",5,"solution"],
    [9,"b","written",6,"hinted"],
    [9,"b","written",7,"gradual"],
    [9,"b","written",8,"malice"],
    [9,"c","single",1,"d"],
    [9,"c","single",2,"a"],
    [9,"c","single",3,"c"],
    [9,"c","single",4,"a"],
    [9,"c","single",5,"d"],
    [9,"c","single",6,"b"],
    [9,"c","single",7,"d"],
    [9,"d","multiplewritten",1,"confess, admit"],
    [9,"d","multiplewritten",2,"defend, protect"],
    [9,"d","multiplewritten",3,"hint, suggest"],
    [9,"d","multiplewritten",4,"survey, examine"],
    [9,"d","multiplewritten",5,"contain, hold"],
    [9,"d","multiplewritten",6,"reliable, trustworthy"],
    [9,"d","multiplewritten",7,"elect, choose"],
    [9,"d","multiplewritten",8,"disappear, vanish"],
    [10,"a","ci",1,"ciic"],
    [10,"a","ci",2,"icci"],
    [10,"a","ci",3,"cicc"],
    [10,"a","ci",4,"icic"],
    [10,"a","ci",5,"ccii"],
    [10,"a","ci",6,"ccic"],
    [10,"a","ci",7,"ccci"],
    [10,"a","ci",8,"icci"],
    [10,"b","single",1,"d"],
    [10,"b","single",2,"a"],
    [10,"b","single",3,"d"],
    [10,"b","single",4,"b"],
    [10,"b","single",5,"d"],
    [10,"b","single",6,"b"],
    [10,"b","single",7,"a"],
    [10,"b","single",8,"d"],
    [10,"c","single",1,"c"],
    [10,"c","single",2,"d"],
    [10,"c","single",3,"d"],
    [10,"c","single",4,"b"],
    [10,"c","single",5,"c"],
    [10,"c","single",6,"a"],
    [10,"c","single",7,"a"],
    [10,"d","multiple",1,"abd"],
    [10,"d","multiple",2,"abd"],
    [10,"d","multiple",3,"acd"],
    [10,"d","multiple",4,"abc"],
    [10,"d","multiple",5,"acd"],
    [10,"d","multiple",6,"bcd"],
    [11,"a","single",1,"a"],
    [11,"a","single",2,"d"],
    [11,"a","single",3,"c"],
    [11,"a","single",4,"a"],
    [11,"a","single",5,"b"],
    [11,"a","single",6,"d"],
    [11,"a","single",7,"c"],
    [11,"a","single",8,"b"],
    [11,"b","written",1,"vigorous"],
    [11,"b","written",2,"stress"],
    [11,"b","written",3,"graduates"],
    [11,"b","written",4,"diagram"],
    [11,"b","written",5,"frustrating"],
    [11,"b","written",6,"risk"],
    [11,"b","written",7,"urging"],
    [11,"c","single",1,"c"],
    [11,"c","single",2,"d"],
    [11,"c","single",3,"a"],
    [11,"c","single",4,"b"],
    [11,"c","single",5,"d"],
    [11,"c","single",6,"a"],
    [11,"c","single",7,"c"],
    [12,"a","ci",1,"cici"],
    [12,"a","ci",2,"ciic"],
    [12,"a","ci",3,"cicc"],
    [12,"a","ci",4,"ccic"],
    [12,"a","ci",5,"ccic"],
    [12,"a","ci",6,"ccci"],
    [12,"a","ci",7,"icci"],
    [12,"a","ci",8,"iccc"],
    [12,"b","single",1,"d"],
    [12,"b","single",2,"b"],
    [12,"b","single",3,"b"],
    [12,"b","single",4,"b"],
    [12,"b","single",5,"c"],
    [12,"b","single",6,"b"],
    [12,"b","single",7,"d"],
    [12,"b","single",8,"c"],
    [12,"c","single",1,"c"],
    [12,"c","single",2,"c"],
    [12,"c","single",3,"b"],
    [12,"c","single",4,"d"],
    [12,"c","single",5,"a"],
    [12,"c","single",6,"b"],
    [12,"c","single",7,"d"],
    [12,"d","multiple",1,"abd"],
    [12,"d","multiple",2,"abc"],
    [12,"d","multiple",3,"abc"],
    [12,"d","multiple",4,"acd"],
    [12,"d","multiple",5,"abc"],
    [12,"d","multiple",6,"acd"],
    [12,"d","multiple",7,"abd"],
    [12,"d","multiple",8,"bcd"],
    [13,"a","single",1,"a"],
    [13,"a","single",2,"b"],
    [13,"a","single",3,"d"],
    [13,"a","single",4,"a"],
    [13,"a","single",5,"b"],
    [13,"a","single",6,"c"],
    [13,"a","single",7,"a"],
    [13,"a","single",8,"d"],
    [13,"b","written",1,"experience"],
    [13,"b","written",2,"carnival"],
    [13,"b","written",3,"hasty"],
    [13,"b","written",4,"calendar"],
    [13,"b","written",5,"scattered"],
    [13,"b","written",6,"nation"],
    [13,"b","written",7,"thrilled"],
    [13,"c","single",1,"b"],
    [13,"c","single",2,"c"],
    [13,"c","single",3,"a"],
    [13,"c","single",4,"d"],
    [13,"c","single",5,"a"],
    [13,"c","single",6,"c"],
    [13,"c","single",7,"d"],
    [13,"d","multiplewritten",1,"prank, trick"],
    [13,"d","multiplewritten",2,"dangerous, risky"],
    [13,"d","multiplewritten",3,"empty, vacant"],
    [13,"d","multiplewritten",4,"vigorous, active"],
    [13,"d","multiplewritten",5,"awaken, arouse"],
    [13,"d","multiplewritten",6,"injure, harm"],
    [13,"d","multiplewritten",7,"rule, govern"],
    [13,"d","multiplewritten",8,"hasty, hurried"],
    [14,"a","ci",1,"iicc"],
    [14,"a","ci",2,"cici"],
    [14,"a","ci",3,"ciic"],
    [14,"a","ci",4,"iccc"],
    [14,"a","ci",5,"ccic"],
    [14,"a","ci",6,"icic"],
    [14,"a","ci",7,"iccc"],
    [14,"a","ci",8,"icci"],
    [14,"b","single",1,"d"],
    [14,"b","single",2,"b"],
    [14,"b","single",3,"a"],
    [14,"b","single",4,"c"],
    [14,"b","single",5,"a"],
    [14,"b","single",6,"d"],
    [14,"b","single",7,"a"],
    [14,"c","single",1,"d"],
    [14,"c","single",2,"b"],
    [14,"c","single",3,"d"],
    [14,"c","single",4,"c"],
    [14,"c","single",5,"d"],
    [14,"c","single",6,"d"],
    [14,"c","single",7,"b"],
    [14,"d","multiple",1,"abc"],
    [14,"d","multiple",2,"abd"],
    [14,"d","multiple",3,"acd"],
    [14,"d","multiple",4,"bcd"],
    [14,"d","multiple",5,"abd"],
    [14,"d","multiple",6,"bcd"],
    [15,"a","single",1,"c"],
    [15,"a","single",2,"b"],
    [15,"a","single",3,"d"],
    [15,"a","single",4,"a"],
    [15,"a","single",5,"d"],
    [15,"a","single",6,"b"],
    [15,"a","single",7,"c"],
    [15,"a","single",8,"a"],
    [15,"b","written",1,"tournament"],
    [15,"b","written",2,"division"],
    [15,"b","written",3,"outcome"],
    [15,"b","written",4,"promoted"],
    [15,"b","written",5,"rate"],
    [15,"b","written",6,"regret"],
    [15,"b","written",7,"talent"],
    [15,"c","single",1,"d"],
    [15,"c","single",2,"b"],
    [15,"c","single",3,"d"],
    [15,"c","single",4,"c"],
    [15,"c","single",5,"a"],
    [15,"c","single",6,"b"],
    [15,"c","single",7,"d"],
    [15,"d","multiplewritten",1,"promote, discourage"],
    [15,"d","multiplewritten",2,"timid, bold"],
    [15,"d","multiplewritten",3,"cunning, stupid"],
    [15,"d","multiplewritten",4,"smooth, jagged"],
    [15,"d","multiplewritten",5,"positive, negative"],
    [15,"d","multiplewritten",6,"careless, responsible"],
    [15,"d","multiplewritten",7,"hasty, slow"],
    [15,"d","multiplewritten",8,"scatter, collect"]
  ]

  for (var i =0; i < test.length; i++) {
      var row = test[i];
      var unit = row[0];
      var section = row[1];
      var questionType = row[2];
      var answer = row[3];
  
      switch(questionType){
        
      }
    }