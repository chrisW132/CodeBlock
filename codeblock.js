// add dp to global namespace
 var cw = cw || {};

 // codeBlock constructor (used to create ne object)
 cw.codeBlock = function() {
   var self = this;

   self.y = $('.codingSec li.active a').html();
 }

 // creating function scope for variables
 cw.codeBlock.prototype.init = function() {
   var self = this; // this references the object's members

   // Register click event listener
   $(".runCODE").click(function(){
     var $this = $(this);
     var $returnCode = $this.parents('.tab-pane').children('.sampleResults').find('.returnCODE')

     setTimeout(function(){
       $returnCode.show();
     }, 2020);

     $(".lodingBlock").show();

     setTimeout(function(){
     $('.lodingBlock').hide();
     },2000 );
     return false;
   });

   $('.navActiveTxt').html(self.y);

   $('.codingSec li a').click (function(){
     var x = $(this).html();
     $('.navActiveTxt').html(x);
     $('.collapse.in').collapse('hide');
   });

   // Highlight pre tags
   SyntaxHighlighter.all();

 };

 // Create global namespace for global variables
 cw.global = cw.global || {};

 // Construct a codeBlock object
 cw.global.codeBlock = new cw.codeBlock();
 cw.global.codeBlock.init();
