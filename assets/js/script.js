/****** ================================
 * トップの背景の動き
 * =============================== ******/

// document.addEventListener('DOMContentLoaded', function() {
//     const aboutSection = document.getElementById('about');
//     const topSection = document.getElementById('top');

//     document.addEventListener('scroll', function() {
//         const aboutSectionRect = aboutSection.getBoundingClientRect();
//         console.log('Scroll event triggered');
//         console.log('aboutSectionRect.top:', aboutSectionRect.top, 'window.innerHeight / 2:', window.innerHeight / 2);

//         if (aboutSectionRect.top <= window.innerHeight / 2) {
//             console.log('Changing background attachment to none');
//             topSection.style.backgroundAttachment = '';
//         } else {
//             console.log('Changing background attachment to fixed');
//             topSection.style.backgroundAttachment = 'fixed';
//         }
//     });
// });

/****** ================================
 * 留学相談アイコン用
 * =============================== ******/

// const counselingImgContainer = document.getElementsByClassName("counseling-img-container")[0];

// counselingImgContainer.addEventListener("mouseover", function(){
//     counselingImgContainer.querySelector("#counseling-img").style.display = "none";
//     counselingImgContainer.querySelector("#counseling-hover").style.display = "block";
// })

// counselingImgContainer.addEventListener("mouseout", function(){
//     counselingImgContainer.querySelector("#counseling-hover").style.display = "none";
//     counselingImgContainer.querySelector("#counseling-img").style.display = "block";
// })


/****** ================================
 * ハンバーガーメニュー用
 * =============================== ******/

//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
			$('.openbtn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
			$('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
		}else{//それ以外は
			$('.openbtn').removeClass('fadeDown');//fadeDownというクラス名を除き
			$('#header').removeClass('dnone');//dnoneというクラス名を除く
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

//ボタンをクリックした際のアニメーションの設定
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});

// //リンク先のidまでスムーススクロール
// //※ページ内リンクを行わない場合は不必要なので削除してください
// $('#g-navi li a').click(function () {
// 	var elmHash = $(this).attr('href');
// 	var pos = $(elmHash).offset().top-0;
// 	$('body,html').animate({scrollTop: pos}, 1000);
// 	return false;
// });











/****** ================================
 * GSAP横スクロール用
 * =============================== ******/

// const data = document.querySelector('#data');
// if (data) {
//     // gsap.registerPlugin(ScrollTrigger); // npm/yarnの際に必要
//     const panels = gsap.utils.toArray('.panel');
//     const dataWidth = data.offsetWidth;

//     /**
//     * 横スクロール開始
//     */
//     gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1), // transformX
//         ease: "none", // easingの設定
//         scrollTrigger: { // scrollTrigger
//             trigger: data, // アニメーションの対象となる要素
//             pin: true, // 要素を固定する
//             scrub: 0.5, // スクロールとアニメーションを同期させる。数値で秒数の設定に
//             snap: { // スナップスクロールにする
//                 snapTo: 1 / (panels.length - 1), // スナップで移動させる位置
//                 duration: { min: 0.4, max: 0.6 }, // スナップで移動する際の遅延時間
//                 ease: "none" // easing
//             },
//             end: () => "+=" + dataWidth // アニメーションの終了タイミング
//         }
//     });
// }

const data = document.querySelector('#data');
if (data) {
    const panels = gsap.utils.toArray('.panel');
    const dataWidth = data.offsetWidth;

    // 画面幅が768px以上の場合にGSAPを有効化
    if (window.innerWidth > 768) {
        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: data,
                pin: true,
                scrub: 0.5,
                snap: {
                    snapTo: 1 / (panels.length - 1),
                    duration: { min: 0.4, max: 0.6 },
                    ease: "none"
                },
                end: () => "+=" + dataWidth
            }
        });
    } else {
        // モバイル用の調整が必要ならここに追加する
        console.log("Mobile version - GSAP is disabled");
    }
}



/****** ================================
 * アコーディオン用
 * =============================== ******/

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	$('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
// $(window).on('load', function(){
// 	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
// 	$(".open").each(function(index, element){	//openクラスを取得
// 		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
// 		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
// 		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
// 		$(Box).slideDown(500);					//アコーディオンを開く
// 	});
// });


/****** ================================
 * スライドショー用
 * =============================== ******/

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
    pauseOnHover: false
});


/****** ================================
 * モーダル用
 * =============================== ******/

// $(document).ready(function() {
//     var scrollPosition = 0;

//     function toggleModal() {
//         if ($('.modaal').is(':visible')) {
//             // モーダルを閉じる処理
//             $('.modaal').hide();
//             $('html').css('overflow-y', 'scroll');
//             $(window).scrollTop(scrollPosition); // モーダルを閉じた後にスクロール位置を元に戻す
//         } else {
//             // モーダルを開く処理
//             scrollPosition = $(window).scrollTop(); // 現在のスクロール位置を保存
//             $('.modaal').show();
//             $('html').css('overflow-y', 'hidden');
//             $(window).scrollTop(scrollPosition); // モーダルを開く前にスクロール位置を維持
//         }
//     }

//     // モーダル開閉トリガー
//     $(".modal-open").click(function(e) {
//         e.preventDefault(); // デフォルトのリンク動作を無効化
//         toggleModal();
//     });

//     // モーダルの背景をクリックして閉じる
//     $(document).on('click', function(e) {
//         if ($(e.target).hasClass('modaal')) {
//             toggleModal();
//         }
//     });

//     // モーダル閉じるボタン
//     $(".modaal-close").click(function() {
//         toggleModal();
//     });
// });


// てすと

$(document).ready(function() {
    var scrollPosition = 0;

    function openModal(modalId) {
        scrollPosition = $(window).scrollTop(); // 現在のスクロール位置を保存
        $(modalId).show();
        $('html').css('overflow-y', 'hidden');
        $(window).scrollTop(scrollPosition); // モーダルを開く前にスクロール位置を維持
    }

    function closeModal() {
        $('.modaal').hide();
        $('html').css('overflow-y', 'scroll');
        $(window).scrollTop(scrollPosition); // モーダルを閉じた後にスクロール位置を元に戻す
    }

    // モーダル開閉トリガー
    $("#about1").click(function() {
        openModal('#about-sodan');
    });
    $("#about2").click(function() {
        openModal('#about-wings');
    });
    $("#about3").click(function() {
        openModal('#about-ryutatsu');
    });
    $("#about4").click(function() {
        openModal('#about-event');
    });
    $("#about5").click(function() {
        openModal('#about-other');
    });

    // モーダルの背景をクリックして閉じる
    $(document).on('click', function(e) {
        if ($(e.target).hasClass('modaal')) {
            closeModal();
        }
    });

    // $(document).on('click', '.modaal-content img', function(e) {
    //     closeModal();
    // });

    // モーダル閉じるボタン
    $(".modaal-close").click(function() {
        closeModal();
    });
});


