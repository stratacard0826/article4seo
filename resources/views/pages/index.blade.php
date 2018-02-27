@extends('layouts.app')
@section('content')



<slider></slider>
<calc></calc>

<div class="b_why_we">
  <div class="container">

    <div class="_h3">welcome</div>
    <div class="_h4">A Turnkey Writing Service Solution For Everyone</div>

    <div class="_quote">
      We've been doing academic writing, ghostwriting and freelance writing since 2006. We are not an on-line flea market with hundreds of writers' profiles and avatars -- <b>we are a real company that offers a turnkey, hands-off custom writing solution to your need!</b> With us, you get great fully managed freelance writers that are backed by a full time team of project managers who are on standby 24/7 to make sure your project is done the right way!
    </div>

    <div class="_content">
      <div class="_video">
        <div class="_video_block">
          <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk&autoplay=1&rel=0&showinfo=0" class="_link_vileo" data-fancybox>
            <img src="{{ asset('img/video_bg.jpg')}}" alt="">
          </a>
        </div>
      </div>

      <div class="_text">
        <p>Our services are quick, discrete and professional and it takes only 5 minutes to place an order! After that, it is all handled for you! Once we have your project specifications, we do all the legwork associated with getting your project done by the best writer possible in the shorted amount of time.
        </p>

        <p>If you are the sort of client that wants to be involved in the process 100%, we provide all the tools required. You will have a messaging application to communicate with the writer, SMS and E-mail notifications to stay informed, a facility to upload and fax any required materials or sources and a 24/7 support team with a toll-free hotline and a chat application for any support required.

        </p>
      </div>
    </div>
    <advantages></advantages>

  </div>
</div>



<div class="b_about">
    <div class="container">

      <div class="_h3">about</div>
      <div class="_h4">Authentic & Personalized</div>

      <div class="_about">

        <div class="_paragraph">
          <h3>Your instructions will be followed</h3>

          <p>
            When you work with an on-line writing service, you really want to be sure your ordered essay or dissertation will be one-of-a-kind and exactly what you asked for. We are very good at meeting guidelines and deadlines. Since our writers write custom papers (no plagiarism), it is easy for them to follow your requirements because they start to write from scratch based on your guidelines rather than trying to tweak an already written essay. Our unlimited revision service, which is free with every order, is guaranteed to polish any rough edges and make the work 100% to your satisfaction.
          </p>
        </div>

        <div class="_content">
          <div class="_right_side">
            <div class="_img">
              <img src="img/personalized.jpg" alt="">
            </div>
          </div>


          <div class="_left_side">
            <h3>
              You will have full control over the progress of your order
            </h3>

            <p>
              When you work with an on-line writing service, you really want to be sure your ordered essay or dissertation will be one-of-a-kind and exactly what you asked for. We are very good at meeting guidelines and deadlines. Since our writers write custom papers (no plagiarism), it is easy for them to follow your requirements because they start to write from scratch based on your guidelines rather than trying to tweak an already written essay. Our unlimited revision service, which is free with every order, is guaranteed to polish any rough edges and make the work 100% to your satisfaction.
            </p>

            <ul>
              <li>
                100% non-plagiarized writing
              </li>
              <li>
                The revision service is unlimited and free with every order
              </li>
              <li>
                You are free to modify instructions and ask the writer for amendments (extra charge)
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
</div>


<steps></steps>
<feedback></feedback>

<div class="b_why_we">
    <div class="container">
        <div class="_h3">Learn More </div>
        <ul>
            <li><a href="">Our Services</a></li>
            <li><a href="">Our Writers</a></li>
        </ul>
    </div>
</div


@endsection
