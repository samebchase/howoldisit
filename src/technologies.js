const technologies = [
  // Please maintain alphabetical order when you add a technology :)
  // Date format is YYYY-MM-DD
  { name: "ABAP", released: new Date("1983-01-01"), icon: "abap" },
  { name: "Ada", released: new Date("1980-01-01") },
  { name: "AdonisJs", released: new Date("2015-08-15") },
  { name: "Airflow (Apache)", released: new Date("2017-04-19") },
  { name: "Amazon Web Services", released: new Date("2004-03-15") },
  { name: "Android", released: new Date("2008-09-23"), icon: "android" },
  { name: "Angular", released: new Date("2016-09-14"), icon: "angular" },
  { name: "AngularJS", released: new Date("2010-10-20"), icon: "angular" },
  { name: "Ansible", released: new Date("2012-03-20") },
  { name: "Assembly", released: new Date("1949-01-01"), icon: "asm" },
  { name: "Babbage Assembly", released: new Date("1971-01-01") },
  { name: "Babel", released: new Date("2014-09-28") },
  { name: "BackBoneJS", released: new Date("2010-10-13"), icon: "backbone" },
  { name: "Bash", released: new Date("1989-06-08") },
  { name: "BASIC", released: new Date("1964-05-01") },
  { name: "Bootstrap 4", released: new Date("2018-01-18"), icon: "bootstrap" },
  { name: "Brainfuck", released: new Date("1993-09-01") },
  { name: "C", released: new Date("1972-01-01"), icon: "c" },
  { name: "C#", released: new Date("2001-12-01"), icon: "cSharp" },
  { name: "C++", released: new Date("1985-10-01"), icon: "cPlusPlus" },
  { name: "CakePHP", released: new Date("2005-04-01"), icon: "cakePHP" },
  { name: "Chef", released: new Date("2009-01-15"), icon: "chef" },
  { name: "Clojure", released: new Date("2007-10-16") },
  { name: "COBOL", released: new Date("1959-01-01") },
  { name: "CodeIgniter", released: new Date("2006-03-28"), icon: "codeIgniter" },
  { name: "Concourse", released: new Date("2014-04-19"), icon: "concourseci" },
  { name: "CouchDB", released: new Date("2005-03-01") },
  { name: "Crystal", released: new Date("2014-07-18") },
  { name: "CSS", released: new Date("1996-12-17"), icon: "css" },
  { name: "Dart", released: new Date("2011-11-10") },
  { name: "Direct3D", released: new Date("1996-06-02") },
  { name: "Django", released: new Date("2005-07-15"), icon: "django" },
  { name: "Docker", released: new Date("2013-03-13"), icon: "docker" },
  { name: "Drupal", released: new Date("2000-05-18"), icon: "drupal" },
  { name: "D3", released: new Date("2010-09-27") },
  { name: "Electron", released: new Date("2013-04-12"), icon: "electron" },
  { name: "Elixir", released: new Date("2011-01-01") },
  { name: "Elm", released: new Date("2012-04-01") },
  { name: "Ember.js", released: new Date("2011-12-08") },
  { name: "Erlang", released: new Date("1986-01-01"), icon: "erlang" },
  { name: "F#", released: new Date("2005-06-21") },
  { name: "Flask", released: new Date("2010-04-01") },
  { name: "Flutter", released: new Date("2017-06-12") },
  { name: "Fortran", released: new Date("1956-10-15") },
  { name: "fsl", released: new Date("2017-08-26") },
  { name: "Gatsby", released: new Date("2017-08-06"), icon: "gatsby" },
  { name: "Gensim", released: new Date("2009-08-31") },
  { name: "Git", released: new Date("2005-04-03"), icon: "git" },
  { name: "Go", released: new Date("2009-10-10"), icon: "go" },
  { name: "Grafana", released: new Date("2013-12-11"), icon: "grafana" },
  { name: "GraphQL", released: new Date("2015-07-02"), icon: "graphQL" },
  { name: "Groovy", released: new Date("2007-01-02"), icon: "groovy"},
  { name: "Hadoop (Apache)", released: new Date("2011-12-10") },
  { name: "HANA", released: new Date("2010-06-18"), icon: "hana" },
  { name: "Haskell", released: new Date("1990-01-01"), icon: "haskell" },
  { name: "Haxe", released: new Date("2005-01-01") },
  { name: "Hive (Apache)", released: new Date("2015-10-22") },
  { name: "HTML", released: new Date("1993-06-01"), icon: "html" },
  { name: "Hugo", released: new Date("2013-06-05") },
  { name: "Hyper-V", released: new Date("2008-06-26") },
  { name: "IBM Notes", released: new Date("1989-12-07") },
  { name: "Java", released: new Date("1996-10-10"), icon: "java" },
  { name: "JavaScript", released: new Date("1995-12-04"), icon: "javaScript"},
  { name: "Jekyll", released: new Date("2008-11-17"), icon: "jekyll" },
  { name: "Jenkins", released: new Date("2011-02-03"), icon: "jenkins" },
  { name: "jQuery", released: new Date("2006-08-26"), icon: "jquery" },
  { name: "jssm", released: new Date("2017-05-03") },
  { name: "Julia", released: new Date("2012-01-01") },
  { name: "Kafka (Apache)", released: new Date("2011-08-15"), icon: "kafka" },
  { name: "Karaf", released: new Date("2010-08-23") },
  { name: "Keras", released: new Date("2015-04-27") },
  { name: "Knockout", released: new Date("2010-08-05") },
  { name: "Kotlin", released: new Date("2016-02-15") },
  { name: "Kubernetes", released: new Date("2014-07-07") },
  { name: "Laravel", released: new Date("2011-09-09"), icon: "laravel" },
  { name: "Laravel 4", released: new Date("2013-06-28"), icon: "laravel" },
  { name: "Laravel 5", released: new Date("2015-03-04"), icon: "laravel" },
  { name: "Linux", released: new Date("1991-08-25") },  
  { name: "Lisp", released: new Date("1958-08-01") },
  { name: "Lua", released: new Date("1993-07-28"), icon: "lua" },
  { name: "Magento", released: new Date("2008-03-31") },
  { name: "Maven", released: new Date("2004-08-13") },
  { name: "Mesos (Apache)", released: new Date("2016-08-27") },
  { name: "Metal", released: new Date("2014-06-02") },
  { name: "Microsoft Azure", released: new Date("2010-02-01") },
  { name: "MIPS", released: new Date("1985-02-01") },
  { name: "MongoDB", released: new Date("2009-02-11"), icon: "mongoDB" },
  { name: "MS-DOS", released: new Date("1981-08-12") },
  { name: "MySQL", released: new Date("1995-05-23"), icon: "mySQL" },
  { name: "Node.js", released: new Date("2009-05-27"), icon: "nodeJs" },
  { name: "Numpy", released: new Date("2006-08-26") },
  { name: "Objective-C", released: new Date("1984-01-01") },
  { name: "OCaml", released: new Date("1996-01-01") },
  { name: "OpenGL", released: new Date("1992-06-30") },
  { name: "OpenStack", released: new Date("2010-10-21"), icon: "openstack" },
  { name: "pandas", released: new Date("2008-02-11") },
  { name: "Perl", released: new Date("1987-12-18") },
  { name: "PHP", released: new Date("1995-06-08"), icon: "php" },
  { name: "Polymer", released: new Date("2015-06-02") },
  { name: "PostgreSQL", released: new Date("1996-07-08") },
  { name: "Preact", released: new Date("2015-09-11") },
  { name: "Prometheus", released: new Date("2012-11-24"), icon: "prometheus" },
  { name: "Protovis", released: new Date("2007-10-07") },
  { name: "Python 1", released: new Date("1991-02-20"), icon: "python" },
  { name: "Python 2", released: new Date("2000-11-16"), icon: "python" },
  { name: "Python 3", released: new Date("2008-12-03"), icon: "python" },
  { name: "PyTorch", released: new Date("2016-08-26") },
  { name: "Ramda", released: new Date("2013-05-29"), icon: "react" },
  { name: "React", released: new Date("2013-05-29"), icon: "react" },
  { name: "React Native", released: new Date("2016-03-24"), icon: "react" },
  { name: "Redis", released: new Date("2009-06-10"), icon: "redis" },
  { name: "Redux", released: new Date("2015-06-02") },
  { name: "Rollup", released: new Date("2015-05-15") },
  { name: "Ruby", released: new Date("1995-12-21"), icon:"ruby" },
  { name: "Ruby on Rails", released: new Date("2005-12-21"), icon:"rails" },
  { name: "Rust", released: new Date("2015-06-05"), icon:"rust" },
  { name: "Sass", released: new Date("2006-11-28"), icon:"sass" },
  { name: "Scala", released: new Date("2004-02-20") },
  { name: "Scheme", released: new Date("1975-12-01") },
  { name: "scikit-learn", released: new Date("2007-06-01") },
  { name: "Smalltalk", released: new Date("1980-01-01")},
  { name: "Spark (Apache)", released: new Date("2014-06-26") },
  { name: "Spring", released: new Date("2002-10-01") },
  { name: "Swift", released: new Date("2014-06-02"), icon: "swift" },
  { name: "Symfony 2", released: new Date("2011-07-00"), icon: "symfony" },
  { name: "Tensorflow", released: new Date("2015-12-09"), icon: "tensorflow" },
  { name: "Terraform", released: new Date("2014-08-28") },
  { name: "The World Wide Web", released: new Date("1990-12-25"), icon: "www" },
  { name: "This project", released: new Date("2018-10-25") },
  { name: "TOML", released: new Date("2013-01-23") },
  { name: "TypeScript", released: new Date("2012-10-01"), icon: "typeScript" },
  { name: "Vue", released: new Date("2014-02-01"), icon: "vue" },
  { name: "Vulkan", released: new Date("2016-02-16") },
  { name: "Webpack", released: new Date("2012-03-10") },
  { name: "Windows 10", released: new Date("2015-07-29"), icon: "windows" },
  { name: "WordPress", released: new Date("2003-05-27"), icon: "wordpress" },
  { name: "WPF", released: new Date("2006-12-21") },
  { name: "Xamarin Forms", released: new Date("2014-05-28") },
  { name: "XAML", released: new Date("2008-07-01") },
  { name: "XML", released: new Date("1998-02-10"), icon: "xml" },
  { name: "Yaml", released: new Date("2001-06-11") }
];

export default technologies;
