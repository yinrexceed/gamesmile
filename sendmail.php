<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
if ( isset($_POST['name']) && isset($_POST['kana']) && isset($_POST['email']) && isset($_POST['message']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

  // detect & prevent header injections
  $test = "/(content-type|bcc:|cc:|to:)/i";
  foreach ( $_POST as $key => $val ) {
    if ( preg_match( $test, $val ) ) {
      exit;
    }
  }

  $body = $_POST['category']."に関するお問い合わせ"."\n\n";
  $body .= "会社名: ".$_POST['company']."\n";
  $body .= "氏名: ".$_POST['name']."\n";
  $body .= "カナ: ".$_POST['kana']."\n";
  $body .= "メール: ".$_POST['email']."\n";
  $body .= "内容: ".$_POST['message'];

  mb_language('ja');
  mb_internal_encoding('UTF-8');

  mb_send_mail( "contact@gamesmile.jp", "[GS]お問い合わせ" , $body, "From:" . $_POST['email'] );


}


?>
