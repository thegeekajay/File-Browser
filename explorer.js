$(function () {
    $(document).on('click', ".directory", function() 
    {
        var x=$(this).parent();
        switch (true) {
            case x.hasClass('open'):
                x.removeClass('open').addClass('closed');
                x.children('ul').slideUp();
                break;

            case x.hasClass('closed'):
                x.removeClass('closed').addClass('open');
                if(x.hasClass('done'))
                {
                    x.children('ul').slideDown().fadeIn();
                }
                if(!x.hasClass('done'))
                {
                    var url = "explorer.php?path="+x.attr('path');
                    alert(url);
                    var string1 = '<ul class="tree">';
                    $.getJSON(url, function (data) {
                        for (var i=0;i<data.length;i++){
                            switch( data[i].isDir){
                                case '1':  string1+='<li class="closed" path="'+x.attr('path')+'/'+data[i].name+'"><span class="directory">'+data[i].name+'</span></li>';
                                    break; 
                                case '0':  string1+='<li class="closed" path=""><span class="file">'+data[i].name+'</span></li>';
                                    break;
                            }
                        }
                        string1+='</ul>';
                         x.append(string1);
                    });
                    x.addClass('done');
                }
           break;
        }
    });     
});

e
